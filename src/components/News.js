import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import imageNotFound from './imageNotFound.webp'

export default class News extends Component {
  static defaultProps = {
    pageSize: 24,
    country: "us",
    category: "general"
  }

    static propTypes = {
      pageSize: PropTypes.number,
      country: PropTypes.string,
      category: PropTypes.string
    }

  constructor() {
    super()
    this.state = {
      article : [],
      loading: false,
      page: 1
    }
  }
  
  capitalizeTitle = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  async componentDidMount() {
    document.title = `NewsNexus - ${this.capitalizeTitle(this.props.category)}`
    this.fetchArticles(1)
  }

  fetchArticles = async(page) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6dcbbd9745d3465f9bc371bfb3b0a4a5&pageSize=${this.props.pageSize}&page=${page}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({article: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false,
      page: page
    })
  }

  nextPage = async() => {
    this.fetchArticles(this.state.page + 1)
  }

  previousPage = async() => {
    this.fetchArticles(this.state.page - 1)
  }

  render() {
    return (
      <div>
        <div className='w-[70%] max-w-[1000px] mx-auto py-10'>
          <h2 className='text-ceter text-2xl font-bold text-center'>News Nexus Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          <div className='w-full flex gap-9 flex-wrap items-stretch py-10'>
            {this.state.article.map((element) => {
              return <div key={element.url} className='w-[calc(34.5%-36px)]'>
                <NewsItems title={element.title} description={element.description} imgUrl={element.urlToImage? element.urlToImage: imageNotFound} newsUrl={element.url} author={element.author? element.author: "Unknown"} date={element.publishedAt}/>
              </div>
            })}
          </div>
          {!this.state.loading && <div className='flex justify-between'>
            <button onClick={this.previousPage} className={`bg-slate-200 text-black px-3 py-1.5 rounded-md font-semibold ${this.state.page<=1? 'invisible': 'visible'}`}>&larr; Previous</button>
            <button onClick={this.nextPage} className={`bg-slate-200 text-black px-3 py-1.5 rounded-md font-semibold ${(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) ? 'invisible' : 'visible'}`}>Next &rarr;</button>
          </div>}
        </div>
      </div>
    )
  }
}

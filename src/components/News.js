import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import images from './images.png';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultProps = {
    pageSize: 18,
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
      article: [],
      loading: true,
      page: 1,
      totalResults: 0,
    }
  }

  capitalizeTitle = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount() {
    document.title = `NewsNexus - ${this.capitalizeTitle(this.props.category)} Headlines`;
    this.fetchArticles();
  }

  fetchArticles = async () => {
    this.props.setProgess(20)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    const data = await fetch(url);
    this.props.setProgess(30)
    const parsedData = await data.json();
    this.props.setProgess(60)
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page
    });
    this.props.setProgess(100)
  }

  fetchData = async () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true
    }));
  
    // Using the updated page value from state
    const { page } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${page}`;
  
    const data = await fetch(url);
    const parsedData = await data.json();
    
    this.setState(prevState => ({
      article: prevState.article.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    }));

  }

  render() {
    return (
      <div>
        <div className='w-[70%] max-w-[1000px] mx-auto py-10'>
          <h2 className='text-ceter text-2xl font-bold text-center'>News Nexus: Top {this.capitalizeTitle(this.props.category)} Headlines</h2>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.article.length} // This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.article.length < this.state.totalResults}
            loader={<Spinner />}>
            <div className='w-full flex gap-9 flex-wrap items-stretch py-10'>
              {this.state.article.map((element, index) => {
                return <div key={element.url + index} className='w-[calc(34.5%-36px)]'>
                  <NewsItems title={element.title} description={element.description} imgUrl={element.urlToImage ? element.urlToImage : images} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} />
                </div>
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

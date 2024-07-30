import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import images from './images.png';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const capitalizeTitle = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  useEffect(() => {
    fetchApi()
  }, [])
  
  const fetchApi = async() => {
    document.title = `NewsNexus - ${capitalizeTitle(props.category)} Headlines`;
    
    props.setProgress(20)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true);
    const data = await fetch(url);
    props.setProgress(30)
    const parsedData = await data.json();
    props.setProgress(60)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  const fetchData = async () => {
    setLoading(true);
    // Using the updated page value from state
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page + 1}`;
    
    const data = await fetch(url);
    const parsedData = await data.json();
    setLoading(false)
    setPage(prevPage => prevPage + 1);
    setArticles((prevArticles) => prevArticles.concat(parsedData.articles))
  }
  
    return (
      <div>
        <div className='w-[70%] max-w-[1000px] mx-auto py-10'>
          <h2 className='text-ceter text-2xl font-bold text-center'>News Nexus: Top {capitalizeTitle(props.category)} Headlines</h2>
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length} // This is important field to render the next data
            next={fetchData}
            hasMore={articles.length < totalResults}
            loader={loading && <Spinner />}>
            <div className='w-full flex gap-9 flex-wrap items-stretch py-10'>
              {articles.map((element, index) => {
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

News.defaultProps = {
  pageSize: 18,
  country: "us",
  category: "general"
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}
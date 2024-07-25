import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props
    return (
      <div className='h-full'>
        <div className='w-full shadow-xl rounded-md pb-2 h-full relative'>
            <div>
                <img className='rounded-md' src={imgUrl} alt="img" />
            </div>
            <div className='px-5 py-3 space-y-2'>
                <h5 className='font-semibold'>{title}</h5>
                <p className='text-sm pb-2'>{description}</p>
                <p className='pb-5 text-xs text-gray-600'>By {author}on {new Date(date).toDateString()}</p>
                <a href={newsUrl} rel="noopener noreferrer" target='_blank' style={{backgroundColor: '#16212c'}} className='px-3 py-1.5 text-white rounded-md'>Read More</a>
            </div>
            <div>
              <p className='bg-red-500 text-white text-xs inline-block px-2 rounded-xl font-medium py-1' style={{position: 'absolute', top: '-13px', right: '10px'}}>{source}</p>
            </div>
        </div>
      </div>
    )
  }
}

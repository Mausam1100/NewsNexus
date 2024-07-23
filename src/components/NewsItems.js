import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description, imgUrl, newsUrl} = this.props
    return (
      <div className='h-full'>
        <div className='w-full shadow-xl rounded-md pb-2 h-full'>
            <div>
                <img className='rounded-md' src={imgUrl} altimg />
            </div>
            <div className='px-5 py-3 space-y-2'>
                <h5 className='font-semibold'>{title}</h5>
                <p className='text-sm pb-5'>{description}...</p>
                <a href={newsUrl} target='_blank' className='bg-blue-500 px-3 py-1.5 text-white rounded-md'>Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

NewsItems.defaultProps = {
  imgUrl: '	https://heise.cloudimg.io/bound/1200x1200/q85.png-…18/4/6/3/8/0/1/4/iphone_logo-4300cebc0220b293.png'
}
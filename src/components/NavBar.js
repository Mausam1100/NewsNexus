import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div className='bg-blue-300 py-5'>
        <div className='w-[90%] max-w-[1500px] mx-auto'>
            <ul className='flex items-center space-x-6'>
                <h2 className='text-2xl font-bold pr-4'>News Nexus</h2>
                <li><a href="/" className='text-lg font-medium'>Home</a></li>
                <li><a href="/" className='text-lg font-medium'>News</a></li>
                <li><a href="/" className='text-lg font-medium'>About</a></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default NavBar
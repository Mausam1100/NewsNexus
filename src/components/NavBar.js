import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#16212c'}} className='text-white py-4 sticky -top-1.5'>
        <div className='w-[94%] max-w-[1400px] mx-auto'>
            <ul className='flex items-center space-x-6'>
                <h2 className='text-xl font-bold pr-4'>NewsNexus</h2>
                <li><Link to="/" className='text-[15px] font-medium'>Home</Link></li>
                <li><Link to="/business" className='text-[15px] font-medium'>Business</Link></li>
                <li><Link to="/entertainment" className='text-[15px] font-medium'>Entertainment</Link></li>
                <li><Link to="/general" className='text-[15px] font-medium'>General</Link></li>
                <li><Link to="/health" className='text-[15px] font-medium'>Health</Link></li>
                <li><Link to="/science" className='text-[15px] font-medium'>Science</Link></li>
                <li><Link to="/sports" className='text-[15px] font-medium'>Sports</Link></li>
                <li><Link to="/technology" className='text-[15px] font-medium'>Technology</Link></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default NavBar
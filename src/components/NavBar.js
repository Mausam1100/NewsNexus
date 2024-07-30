import React, { useState } from 'react'
import {Link} from 'react-router-dom';

export function NavBar() {
  const [active, setActive] = useState(true)

  const onToggle = () => {
    setActive = (true)
  }
  
    return (
      <div style={{backgroundColor: '#16212c'}} className='text-white py-4 sticky top-0'>
        <div className='w-[90%] max-w-[1400px] mx-auto flex items-center justify-between'>
            <h2 className='text-2xl font-bold pr-4'>NewsNexus</h2>
            <ul className='flex items-center space-x-6'>
                <li><Link to="/" id='home' className={`text-[15px] font-medium focus:text-white text-gray-300 hover:text-white ${active? 'text-white': 'text-gray-300'}`}>Home</Link></li>
                <li><Link to="/business" onClick={onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Business</Link></li>
                <li><Link to="/entertainment" onClick={onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Entertainment</Link></li>
                <li><Link to="/general" onClick={onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>General</Link></li>
                <li><Link to="/health" onClick={onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Health</Link></li>
                <li><Link to="/science" onClick={onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Science</Link></li>
                <li><Link to="/sports" onClick={onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Sports</Link></li>
                <li><Link to="/technology" onClick={onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Technology</Link></li>
            </ul>
        </div>
      </div>
    )
  
}

export default NavBar

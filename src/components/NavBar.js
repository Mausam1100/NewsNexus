import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class NavBar extends Component {
  constructor() {
    super()
    this.state = ({
      active: true
    })
  }

  onToggle = () => {
    this.setState({
      active: false
    })
  }
  render() {
    return (
      <div style={{backgroundColor: '#16212c'}} className='text-white py-4 sticky -top-1.5'>
        <div className='w-[90%] max-w-[1400px] mx-auto flex items-center justify-between'>
            <h2 className='text-2xl font-bold pr-4'>NewsNexus</h2>
            <ul className='flex items-center space-x-6'>
                <li><Link to="/" id='home' className={`text-[15px] font-medium focus:text-white text-gray-300 hover:text-white ${this.state.active? 'text-white': 'text-gray-300'}`}>Home</Link></li>
                <li><Link to="/business" onClick={this.onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Business</Link></li>
                <li><Link to="/entertainment" onClick={this.onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Entertainment</Link></li>
                <li><Link to="/general" onClick={this.onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>General</Link></li>
                <li><Link to="/health" onClick={this.onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Health</Link></li>
                <li><Link to="/science" onClick={this.onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Science</Link></li>
                <li><Link to="/sports" onClick={this.onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Sports</Link></li>
                <li><Link to="/technology" onClick={this.onToggle} className='text-[15px] font-medium focus:text-white text-gray-300 hover:text-white'>Technology</Link></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default NavBar
import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
    return (
      <div className='flex justify-center py-16'>
        <img src={loading} alt=""/>
      </div>
    )
}


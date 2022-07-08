import React from 'react'
import Quote from './Quote'
import Weather from './Weather'

function Main(props) {


  return (
    <div className='flex flex-wrap bg-white'>
     <Quote/>
     <Weather/>
    </div>
  )
}

export default Main
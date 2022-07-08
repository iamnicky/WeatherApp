import React from 'react'

function Main(props) {


  return (
    <div>
      <h1>weather app</h1>

      <input className='w-16 h-8 border-2 border-black' placeholder='search here' type="search" />
      <button className='bg-blue-300 h-8 mt-6 p-2 rounded shadow-xl border-b-4 border-blue-800 mr-16' type="submit" >search</button>

    </div>
  )
}

export default Main
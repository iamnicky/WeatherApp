import React from 'react'

function Weather(props) {
    


  return (
 
         <div className='box bg-red-200 h-[540px]  flex justify-center '>
            <div className='container bg-green-200 m-2   '>
                <div className='flex '>
                <input
                    className='mt-4 m-16 rounded-3xl p-2 text-xl '
                    type="search"
                    onChange={(event)=>{

                    }}>

                </input>
                <button className='bg-blue-300 h-8 mt-6 p-2 rounded shadow-xl border-b-4 border-blue-800 mr-16'>search</button>
                </div>
                <div className='bg-yellow-300 mt-8 '>
                    <h2 className='flex justify-center text-xl font-bold my-4'>location</h2>
                    <h3 className='flex justify-center font-semi-bold text-xl'></h3>
                    <h2 className='flex justify-center'>celious</h2>
                    <h3 className='flex justify-center'>remaing details</h3>
                </div>
               
            </div>

        </div>

  )
}

export default Weather
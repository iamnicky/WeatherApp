import React from 'react'


function Weather(props) {
    
 

  return (
 
         <div className='box bg-red-200 h-[540px]  flex justify-center '>
            <div className='container bg-green-200 m-2   '>
                
                <div className='bg-yellow-300 mt-8 '>
                    <h2 className='flex justify-center text-xl font-bold my-4'>hello</h2>
                    <h3 className='flex justify-center font-semi-bold text-xl'>{props.des}</h3>
                    <h2 className='flex justify-center'>{props.detail}</h2>
                    <h3 className='flex justify-center'>remaing details</h3>
                </div>
               
            </div>

        </div>

  )
}

export default Weather
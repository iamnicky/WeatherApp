
import React from 'react'
import { useEffect,useState } from 'react'

export default function Quote() {

    const [quote,setQuote]=useState("");
    

const getQuote=()=>{
    fetch("https://type.fit/api/quotes")
    .then((res)=>res.json())
    .then((data)=>{
        let randomNum=Math.floor(Math.random()*data.length);
        setQuote(data[randomNum]);
        console.log(quote);
    });
};

useEffect(()=>{
 getQuote();
},[]);


const date=new Date();
const current = date.getHours() + ':' + date.getMinutes();
console.log(current);


    
    return (
       
        <div className=' h-[100vh] w-[600px] '>
            <h1 className='text-6xl  font-bold'>{current<12?current+"AM":current+ "PM"}</h1>
            <h1 className='text-6xl mt-32 ml-16  '>Today's Quote...</h1>
            <p className='font-mono mt-12 ml-16  '><span className='font-bold text-xl'>Quote of the day : </span><span className='text-grey-500 text-xl italic hover:not-italic '>{quote.text}</span></p>
           {quote.author!==""? (<p className='mt-12 ml-16  font-bold text-xl '>Author : <span className='italic font-semibold'>{quote.author}</span></p>):null}
            <button onClick={getQuote} className='
           hover:motion-safe:animate-bounce bg-blue-300 text-white ml-16 mt-32 px-8 py-4 rounded-2xl text-lg'>Next Quote</button>

        </div>
    )
}

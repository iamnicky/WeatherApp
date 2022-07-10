import React from 'react'

export default function Quote() {
    const clicked = () => {
        alert("new quote arrived!")
    }
    return (
        <div className='bg-violet-600 h-[100vh] w-[600px]'>
            <h1 className='text-6xl mt-32 ml-16 font- text-black'>My Quote will appear here</h1>
            <p className='mt-12 ml-16 text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis nemo commodi sequi nostrum ipsam beatae magnam sit, neque laborum, distinctio aperiam. Aut laborum tenetur veritatis accusamus! Libero, consequuntur quisquam.</p>
            <button onClick={clicked} className='hover:motion-safe:animate-bounce bg-black text-white ml-16 mt-32 px-8 py-4 rounded-2xl text-lg'>Next Quote</button>

        </div>
    )
}

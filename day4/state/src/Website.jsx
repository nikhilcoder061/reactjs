import React, { useState } from 'react'

export default function Website({ price }) {
    // console.log(price);
    const [count, setCount] = useState(1);

    const inc = () => {
        setCount(count + 1);
    }

    const decs = () => {
        setCount(count - 1);
    }

    return (
        <>
            <div className={`max-w-5xl mx-auto ${count >= 5 ? 'bg-blue-600' : 'bg-blue-300'}  text-center flex justify-evenly p-4 m-2 items-center`}>
                <h1 className='text-5xl'>{price}</h1>
                <button className='border p-2 bg-red-300 text-3xl' onClick={decs} disabled={count == 1 ? true : false}>-</button>
                <h1 className='text-5xl'>{count}</h1>
                <button className='border p-2 bg-red-300 text-3xl' onClick={inc}>+</button>
                <h1 className='text-5xl' style={{ color: count >= 5 ? 'green' : '' }}>{price * count}</h1>
            </div>

        </>
    )
}

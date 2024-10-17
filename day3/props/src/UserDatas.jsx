import React from 'react'

export default function UserDatas(props) {

    return (
        <>
            <div className='w-[23%] bg-[white] shadow-lg p-3'>
                <div>
                    <img src={props.img} alt="" />
                </div>
                <div>Name: {props.name}</div>
                <div>City: {props.city}</div>
                <div style={{ color: props.age > 30 ? 'red' : 'blue' }}>Age: {props.age}</div>
                <div>
                    <button className={`${props.age > 30 ? 'bg-blue-700 hover:bg-blue-600 focus:ring-2' : 'bg-red-500 hover:bg-red-600 focus:ring-2'} p-2 rounded-lg duration-100 text-white `} >Click Me</button>
                  
                </div>
            </div>
        </>
    )
}

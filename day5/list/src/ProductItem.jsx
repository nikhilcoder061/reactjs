import React from 'react'
import ProductData from './data/ProductData'

export default function ProductItem(props) {

    return (
        <>
            <div className="w-[23%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden border">
                <img
                    className="w-full h-52 object-cover"
                    src={props.img}
                    alt="Product Image"
                />
                <div className="p-4">
                    <h4>{props.id}</h4>
                    <h2 className="text-gray-800 font-bold text-xl mb-2">{props.title} ({props.rating})</h2>
                    <div className="flex items-center mb-3">
                        {/* Rating Stars */}

                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-bold text-lg">${props.price}</span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

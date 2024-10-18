import React from 'react'
import ProductItem from './ProductItem'
import ProductData from './data/ProductData'


export default function Website() {


    return (
        <>

            <div className='max-w-7xl mx-auto text-center'>
                <div>
                    <h1 className='text-7xl'>Product List</h1>
                </div>
                <div className='flex gap-4 flex-wrap mt-5'>

                    {
                        ProductData.map(
                            (products, index) => {
                                // console.log(products.thumbnail);
                                return (
                                    <ProductItem
                                        key={products.id}
                                        id={products.id}
                                        img={products.thumbnail}
                                        title={products.title}
                                        price={products.price}
                                        rating={products.rating}
                                    />
                                )
                            }
                        )
                    }


                </div>
            </div>


        </>
    )
}

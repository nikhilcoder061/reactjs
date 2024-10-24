import React from 'react'

export default function Display({movieItem}) {

    return (
        <>
            <div className="col-2">
                <div className="card text-center">
                    <img src={`https://image.tmdb.org/t/p/w1280${movieItem.poster_path}`} alt="" />
                    <h6 className='p-3'>{movieItem.title}</h6>
                </div>
            </div>

        </>
    )
}

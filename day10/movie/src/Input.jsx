import React from 'react'

export default function Input({ inputMovieHandeler }) {


  const searchMovie = (event) => {

    inputMovieHandeler(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <>
      <input type="text" className='form-control' onKeyUp={searchMovie} />
    </>
  )
}

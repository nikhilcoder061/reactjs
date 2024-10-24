import { useEffect, useState } from "react"
import Display from "./Display"
import Input from "./Input"

function App() {

  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');


  // const APIURL =
  //   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  // const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  // const SEARCHAPI =
  //   "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const getMovies = async () => {
    let apiUrl;
    if (search == '') {
      apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    } else {
      apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();

    const finalData = data.results;

    setMovie(finalData)

  }

  useEffect(
    () => {
      getMovies()
    }, [search]
  )


  const inputMovieHandeler = (searchMovie) => {
    setSearch(searchMovie);
    console.log(search);
  }



  return (
    <>
      <div className="container">
        <div className="row my-3">
          <Input inputMovieHandeler={inputMovieHandeler} />
        </div>
        <div className="row my-3">
          {
            movie.map(
              (movieItem, movieIndex) => {
                return (
                  <Display movieItem={movieItem} key={movieIndex} />
                )
              }
            )
          }
        </div>
      </div>
    </>
  )
}

export default App

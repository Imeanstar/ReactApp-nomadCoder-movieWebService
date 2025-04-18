//실행시 npm start 를 cmd에 입력
import React from "react";
import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
    // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    // .then((response) => response.json())
    // .then((json) => {
    //   setMovies(json.data.movies);
    //   setLoading(false);
    // });
  }
  useEffect(() => {
    getMovies();
  }, []);
  // console.log(movies);
  return <div>
    {loading ? <h1>loading...</h1> : (
      <div>{
        movies.map(movie => 
        <div key={movie.id}>
          <img src={movie.medium_cover_image} />
          <h2>{movie.title}</h2>
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
          </ul>
        </div>
        )}
      </div>)
    }
  </div>
}

export default App;

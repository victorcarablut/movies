import React, { useState, useEffect } from 'react';

// Axios (API)
import axios from "axios";

// config file (URL)
import { url } from "../config.js";

import default_movie_img from '../assets/images/movie-cover-image.jpeg';

function Movies() {

  // list
  const [movies, setMovies] = useState([]);

  // http response status
  const [responseStatusGetMovies, setResponseStatusGetMovies] = useState("");

  useEffect(() => {

    getMovies();

  }, [])

  const getMovies = async () => {

    setResponseStatusGetMovies("loading");

    await axios.get(`${url}`).then((res) => {

      if (res.status === 200) {
        setResponseStatusGetMovies("success");
        setMovies(res.data.results);
      }

    }).catch(err => {
      setResponseStatusGetMovies("error");
      return;
    })
  }



  return (
    <div>

      {responseStatusGetMovies === "loading" && <p className="animate__animated animate__fadeIn animate__infinite" style={{ color: 'grey', marginLeft: 20}}>Loading...</p>}
      {responseStatusGetMovies === "error" && <small style={{ color: 'red', marginLeft: 20 }}>Error</small>}
      {(movies?.length === 0 && responseStatusGetMovies === "success") && <small style={{ color: 'grey', marginLeft: 20 }}>Empty</small>}

      {movies?.length !== 0 &&

        <div style={{ display: "flex", flexWrap: "wrap" }}>

          {movies.map((movie) => (
            <div className="movie-card-section" key={movie.id}>
              <div className="movie-card">
                <div className="movie-poster">
                  <img src={movie.poster_path ? (`https://image.tmdb.org/t/p/w1280${movie.poster_path}`) : default_movie_img} alt={movie.title}></img>
                </div>
                <div className="movie-details">
                  <h3 className="movie-title">{movie.title}</h3>
                  <p className="movie-rating">Vote Average: {movie.vote_average}</p>
                  <p className="movie-release-date">Release Date: {movie.release_date}</p>
                  <a className="movie-search-on-google" href={`https://www.google.com/search?q=${movie.title}`} target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>

      }

    </div>
  )
}

export default Movies;
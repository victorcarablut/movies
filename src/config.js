// https://www.themoviedb.org/
// https://developers.themoviedb.org/3/getting-started/introduction

const TMDB_API_URL = "https://api.themoviedb.org/3/";
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const FEATURED_API = `${TMDB_API_URL}discover/movie?sort_by=popularity.desc&api_key=${TMDB_API_KEY}&page=1`;
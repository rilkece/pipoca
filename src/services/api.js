import axios from "axios";

export const BASE_API = axios.create({ baseURL: "https://api.themoviedb.org/3/" });
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3%22%7D"});
export const API_KEY="bdb92deec818b79460a0575ae78355d5";
export const Popular_URL ='https://api.themoviedb.org/3/movie/popular?api_key=bdb92deec818b79460a0575ae78355d5&page=1';
export const Discover_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=bdb92deec818b79460a0575ae78355d5&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';


//export const detail_url= `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
export const img_url="http://image.tmdb.org/t/p/w200";
export const img_url_poster="http://image.tmdb.org/t/p/w500";
export const img_url_card="http://image.tmdb.org/t/p/w200";
export const fetchSingleMovie = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);

export const fetchSingleMovieCredits = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
export const fetchReviews = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
export const fetchRecommendations = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/similar?api_key=${API_KEY}`);

export const fetchPopularMovies = (page) => BASE_AXIOS.get(`/movie/popular?api_key=${API_KEY}&page=${page}`);
export const fetchTopRatedMovies = (genre) => BASE_API.get(`/movie/top_rated?api_key=${API_KEY}&with_genres=${genre}`);

export const fetchGenres = () => BASE_AXIOS.get(`/genre/movie/list?api_key=${API_KEY}`);

export const fetchSearch = (query) => BASE_API.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);

export const fetchPopularMovie = () =>
BASE_API.get(`movie/popular?api_key=${API_KEY}`);

export const fetchTopRatedMovie = () =>
BASE_API.get(`movie/top_rated?api_key=${API_KEY}`);

export const fetchSort = (
sort_date_to,
sort_date_from,
sort_genre,
sort_choose
) =>
BASE_API.get(
  `movie/popular?api_key=${API_KEY}&release_date.lte=${sort_date_to}&release_date.gte=${sort_date_from}&with_genres=${sort_genre}&sort_by=${sort_choose}`
);

export const fetchSortFilterDiscover = (
  sort_date_to,
  sort_date_from,
  sort_genre,
  sort_choose
) =>
BASE_API.get(
    `discover/movie?api_key=${API_KEY}&original_language=en-US&primary_release_date.gte=${sort_date_to}&primary_release_date.lte=${sort_date_from}&with_genres=${sort_genre}&sort_by=${sort_choose}`
  );

  export const fetchSortFilter = (page, sortValue, startDate, endDate, genre) =>
BASE_AXIOS.get(
  `/discover/movie?api_key=${API_KEY}&page=${page}&sort_by=${sortValue}&release_date.lte=${startDate}&release_date.gte=${endDate}&with_genres=${genre}`
);
export const fetchTopRatedPopular = (category, page) =>
BASE_AXIOS.get(`/movie/${category}?api_key=${API_KEY}&page=${page}`);
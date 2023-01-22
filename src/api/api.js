import axios from 'axios';

const KEY = 'a6c77db842e34b0d748568175c4ac730';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getMovies() {
  const { data } = await axios.get(`trending/movie/week?api_key=${KEY}`);
  return data;
}

export async function searchMovies(query) {
  const { data } = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
}

export async function getMovieById(id) {
  const { data } = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`);
  return data;
}

export async function getCast(id) {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return data;
}

export async function getReviews(id) {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return data;
}

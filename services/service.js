import { API_KEY, BASE_URL } from '@env';
import axios from 'axios';

export const getPopularMovies = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return results;
  } catch (err) {
    console.error('App error when running getPopularMovies!', err);
    throw err;
  }
};

export const getUpcomingMovies = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
    return results;
  } catch (err) {
    console.error('App error when running getUpcomingMovies!', err);
    throw err;
  }
};

export const getFamilyMovies = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    );
    return results;
  } catch (err) {
    console.error('App error when running getFamilyMovies!', err);
    throw err;
  }
};

export const getDocumentaryMovies = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
    );
    return results;
  } catch (err) {
    console.error('App error when running getDocumentaryMovies!', err);
    throw err;
  }
};

export const getPopularTv = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    return results;
  } catch (err) {
    console.error('App error when running getPopularTv!', err);
    throw err;
  }
};

export const getUpcomingTv = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${BASE_URL}/tv/upcoming?api_key=${API_KEY}`);
    return results;
  } catch (err) {
    console.error('App error when running getUpcomingTv!', err);
    throw err;
  }
};

export const getMovie = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
    );
    return data;
  } catch (err) {
    console.error('App error when running getMovie!', err);
    throw err;
  }
};

export const getTv = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
    return data;
  } catch (err) {
    console.error('App error when running getTv!', err);
    throw err;
  }
};

export const searchMovieTv = async (query, type) => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`,
    );
    return results;
  } catch (err) {
    console.error('App error when running searchMovieTv!', err);
    throw err;
  }
};

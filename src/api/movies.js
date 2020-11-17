import axios from './_config';

export const getMoviesBasedOnCategory = async (type, page = 1) => {
  return await axios.get(`/movie/${type}`, {
    params: { page },
  });
};

export const getGenreList = async () => {
  return await axios.get('/genre/movie/list');
};

export const getMovieList = async (with_genres, page = 1) => {
  return await axios.get('/discover/movie', {
    params: {
      page,
      with_genres,
    },
  });
};

import { GET_GENRES_LIST } from './actionTypes';
import { getGenreList as getGenreListRequest } from 'api/movies';

export const getGenreList = () => {
  return (dispatch) => {
    getGenreListRequest().then((data) => {
      return dispatch({ type: GET_GENRES_LIST, payload: data.data.genres });
    });
  };
};

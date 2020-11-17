import { GET_GENRES_LIST } from './actionTypes';

const initState = {
  list: [],
  isFetched: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_GENRES_LIST:
      return {
        list: action.payload,
        isFetched: true,
      };
    default:
      return state;
  }
};

export default reducer;

import {
  FETCH_GET_ARTICLES_REQUEST,
  FETCH_GET_ARTICLES_SUCCESS,
  FETCH_GET_ARTICLES_FAILURE
} from "./getArticlesTypes";

const initialState = {
  loading: false,
  articles: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_GET_ARTICLES_SUCCESS:
      return {
        loading: false,
        articles: action.payload,
        error: ""
      };

    case FETCH_GET_ARTICLES_FAILURE:
      return {
        loading: false,
        articles: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

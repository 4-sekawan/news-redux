import axios from "axios";

import {
  FETCH_GET_ARTICLES_REQUEST,
  FETCH_GET_ARTICLES_SUCCESS,
  FETCH_GET_ARTICLES_FAILURE
} from "./getArticlesTypes";

export const fecthGetArticlesRequest = () => {
  return {
    type: FETCH_GET_ARTICLES_REQUEST
  };
};
export const fecthGetArticlesSuccess = articles => {
  return {
    type: FETCH_GET_ARTICLES_SUCCESS,
    payload: articles
  };
};
export const fecthGetArticlesFailure = error => {
  return {
    type: FETCH_GET_ARTICLES_FAILURE,
    payload: error
  };
};

export const fecthGetArticles = () => {
  return dispatch => {
    dispatch(fecthGetArticlesRequest);
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=us&apiKey=204154cb816a49c79372277f52e91206"
      )
      .then(response => {
        const articles = response.data.articles;
        console.log(response.data.articles);
        dispatch(fecthGetArticlesSuccess(articles));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fecthGetArticlesFailure("Fetch Get Articles : " + errorMsg));
      });
  };
};

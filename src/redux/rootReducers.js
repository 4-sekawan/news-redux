import { combineReducers } from "redux";

import getArticlesReducer from "./getArticles/getArticlesReducer";

const rootReducer = combineReducers({
  articles: getArticlesReducer
});

export default rootReducer;

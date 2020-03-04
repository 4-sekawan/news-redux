import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fecthGetArticles } from "../redux";

function BlogHook() {
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fecthGetArticles()), [dispatch]);

  return <div>News</div>;
}

export default BlogHook;

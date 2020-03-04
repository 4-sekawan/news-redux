import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fecthGetArticles } from "../redux";
import CardNews from "./CardNews";

function BlogHook() {
  const articles = useSelector(state => state.articles.articles);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fecthGetArticles()), [dispatch]);

  return (
    <div>
      <h4>News</h4>
      <div className="card-news">
        {articles.map((data, index) => (
          <CardNews data={data} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default BlogHook;

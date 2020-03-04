import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function NewsPage({ match }) {
  const newsId = match.params.newsId;

  const articles = useSelector(state => state.articles.articles);

  return (
    <div className="news-page">
      <img src={articles[newsId].urlToImage} alt="foto-news" />
      <h4>{articles[newsId].title}</h4>
      <p>{articles[newsId].content}</p>
    </div>
  );
}

export default withRouter(NewsPage);

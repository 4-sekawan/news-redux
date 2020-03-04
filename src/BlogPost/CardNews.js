import React from "react";
import { useHistory } from "react-router-dom";

function CardNews({ data, index }) {
  const history = useHistory();

  return (
    <div
      className="card-news-items"
      onClick={e => {
        e.preventDefault();
        history.push("/news/" + index);
      }}
    >
      <img src={data.urlToImage} alt="foto-news" />
      <p className="title">{data.title}</p>
      <p>
        Sumber : {data.source.name} / {data.author}
      </p>
    </div>
  );
}

export default CardNews;

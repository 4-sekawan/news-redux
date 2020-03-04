import React from "react";

function Post(props) {
  return (
    <div>
      <div className="card" style="width: 18rem;">
        <img
          src={props.data.articles.urlToImage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 class="card-title">{props.data.articles}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
          {props.data.articles}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;

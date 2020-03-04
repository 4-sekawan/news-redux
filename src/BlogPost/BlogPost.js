import React, { Component } from "react";
import Axios from "axios";

class BlogPost extends Component {
  state = {
    articles: []
  };

  getNews = () => {
    Axios.get(
      `http://newsapi.org/v2/top-headlines?country=us&apiKey=204154cb816a49c79372277f52e91206`
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          articles: response.data.articles
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getNews();
  }
  render() {
    return (
      <div>
        {console.log(this.state.articles)}
        {this.state.articles.map((data, index) => (
          <div key={index}>
            <a href={data.url}></a>
            <h4>{data.title}</h4>
            <p> {data.author}</p>
            <p> {data.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BlogPost;

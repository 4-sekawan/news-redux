import React, { Component } from 'react'
import Axios from 'axios'

class BlogPost extends Component {
    state = {
        articles: []
    }

    getNews = () => {
        Axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=204154cb816a49c79372277f52e91206`)
        .then(response => {
            console.log(response.data)
            this.setState({
                articles: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentDidMount(){
        this.getNews()
    }
    render() {
        return (
            <div>
                Dari BlogPost
            </div>
        )
    }
}

export default BlogPost

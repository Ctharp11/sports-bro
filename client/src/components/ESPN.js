import React, { Component } from 'react';
import { newsApiESPN } from '../services/api.js'

class ESPN extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount () {
        newsApiESPN
        .then(res => {
            if (res.status === 'ok') {
                this.setState({ posts: res.articles})
            }
          });

    }
    render() {
        return (
            <div className="container"> 
                ESPN
                <div className="toppost">
                        {this.state.posts.map((post,index) => (
                            <div className="toppost-content" key={index}> 
                            <div className="toppost-title"> {post.title} </div>
                            <div className="toppost-flex">
                                <img className="toppost-img" src={!post.urlToImage ? '/img/no-pic.svg' : post.urlToImage} alt="post" />
                                <div> 
                                <div> {post.source.name} </div> <br />
                                <div> {post.publishedAt.match(/[^T]*/i)[0]} </div>
                                </div>
                            </div>
                            <div className="toppost-description"> {post.description && <span>{post.description.split(' ').slice(0, 17).join(' ')}...</span>} </div>
                            </div>
                        ))
                        }
                </div>
            </div>
        )
    }
}

export default ESPN;

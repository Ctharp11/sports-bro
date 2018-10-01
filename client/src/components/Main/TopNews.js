import React, { Component } from 'react';
import { newsApiAll } from '../../services/api.js'

class TopNews extends Component{
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        newsApiAll
        .then(res => {
            if (res.status === 'ok') {
                this.setState({ posts: res.articles})
            }
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div> 
                {this.state.posts.length > 0
                    ?
                    <div>
                        <div className="sub-header"> Today's Top News </div> 
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
                        <div className="toppost-scroll"> Scroll to see more --> </div>
                    </div>
                 : 
                 <div> Loading... </div>
                }
            </div>
        )
    }
}

// {post.author && <div> author:{ post.author }</div>} <br />

export default TopNews;
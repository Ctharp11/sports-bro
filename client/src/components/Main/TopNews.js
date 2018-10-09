import React, { Component } from 'react';
import ArticleContainer from '../Article/ArticleContainer';
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
                     <div className="container"> 
                     <div className="art-con-thumb-flex">
                     <div className="art-con-thumb-title"> Today's Top News </div>
                    </div>
                    <div className="art-con">
                      {this.state.posts.map((post,index) => (
                        <div key={index}><a href={post.url} target="_blank"> <ArticleContainer {...post}/></a> </div>
                        ))
                      }
                     </div>
                    </div>    
                    </div>
                 : 
                 <div className="loading"> Loading... </div>
                }
            </div>
        )
    }
}

// {post.author && <div> author:{ post.author }</div>} <br />

export default TopNews;
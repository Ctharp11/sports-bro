import React, { Component } from 'react';
import { newsApiNFL } from '../../services/api.js';
import ArticleContainer from '../Article/ArticleContainer';

class NFL extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount () {
        window.scroll(0, 0)
        newsApiNFL
        .then(res => {
            if (res.status === 'ok') {
                this.setState({ posts: res.articles})
            }
          });

    }
    render() {
        return (
            <div className="container"> 
              <div className="art-con-thumb-flex">
                <img className="art-con-thumb-img" src="https://www.nfl.com/apple-touch-icon.png?akmobile=ios&akcarrier=other" alt="bleacer-report" 
                />
                <div className="art-con-thumb-title"> NFL News </div>
              </div>
            <div className="art-con">
              {this.state.posts.map((post,index) => (
                  <div key={index}><a href={post.url} target="_blank"> <ArticleContainer {...post}/></a> </div>
              ))
              }
            </div>
           </div>
        )
    }
}

export default NFL;
import React, { Component } from 'react';
import { newsApiBBC } from '../../services/api.js';
import ArticleContainer from '../Article/ArticleContainer';

class BBC extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount () {
        newsApiBBC
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
                  <img className="art-con-thumb-img" src="https://icon-locator.herokuapp.com/lettericons/B-120-3091b8.png" alt="bleacer-report" 
                  />
                  <div className="art-con-thumb-title"> BBC Sports </div>
                </div>
                <div className="art-con">
                    {this.state.posts.map((post,index) => (
                        <div key={index}> <ArticleContainer {...post}/> </div>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default BBC;
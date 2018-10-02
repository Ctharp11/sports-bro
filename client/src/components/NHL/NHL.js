import React, { Component } from 'react';
import { newsApiNHL } from '../../services/api.js';
import ArticleContainer from '../Article/ArticleContainer';

class NHL extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount () {
        newsApiNHL
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
                <img className="art-con-thumb-img" src="https://icon-locator.herokuapp.com/icon?url=https://www.nhl.com/news&size=70..120..200" alt="bleacer-report" 
                />
                <div className="art-con-thumb-title"> NHL News </div>
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

export default NHL;
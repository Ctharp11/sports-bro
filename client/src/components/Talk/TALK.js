import React, { Component } from 'react';
import { newsApiTalkSport } from '../../services/api.js';
import ArticleContainer from '../Article/ArticleContainer';

class Talk extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount () {
        newsApiTalkSport
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
                <img className="art-con-thumb-img" src="https://icon-locator.herokuapp.com/icon?url=http://talksport.com&size=70..120..200" alt="bleacer-report" 
                />
                <div className="art-con-thumb-title"> Talk Sport </div>
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

export default Talk;
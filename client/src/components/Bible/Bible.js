import React, { Component } from 'react';
import { newsApiSportBible } from '../../services/api.js';
import ArticleContainer from '../Article/ArticleContainer';

class Bible extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount () {
        newsApiSportBible
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
                <img className="art-con-thumb-img" src="http://www.sportbible.com/assets/images/theme/favicons/apple-touch-icon-120x120.png" alt="bleacer-report" 
                />
                <div className="art-con-thumb-title"> The Sport Bible </div>
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

export default Bible;
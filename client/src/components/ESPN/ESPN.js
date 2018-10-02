import React, { Component } from 'react';
import { newsApiESPN } from '../../services/api.js'
import ArticleContainer from '../Article/ArticleContainer';

class ESPN extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount () {
        window.scroll(0, 0)
        newsApiESPN
        .then(res => {
            console.log(res.articles);
            if (res.status === 'ok') {
                this.setState({ posts: res.articles})
            }
          });
    }
    render() {
        return (
            <div className="container"> 
              <div className="art-con-thumb-flex">
                <img className="art-con-thumb-img" src="http://a.espncdn.com/wireless/mw5/r1/images/bookmark-icons-v2/espn-icon-120x120.png" alt="bleacer-report" 
                />
                <div className="art-con-thumb-title"> ESPN </div>
              </div>
            <div className="art-con">
              {this.state.posts.map((post,index) => (
                  <div key={index}><a href={post.url} target="_blank"> <ArticleContainer {...post}/></a></div>
              ))
              }
            </div>
            <div> 
            
            </div>
           </div>
        )
    }
}

export default ESPN;

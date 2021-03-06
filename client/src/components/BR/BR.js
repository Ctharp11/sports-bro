import React, { Component } from 'react';
import { newsApiBR } from '../../services/api.js'
import ArticleContainer from '../Article/ArticleContainer';

class BR extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount () {
        window.scroll(0, 0)
        newsApiBR
        .then(res => {
            if (res.status === 'ok') {
                this.setState({ posts: res.articles})
            }
          });
        //calling a favorited team to add after user authentication
        // favorites('Dallas Cowboys').then(res => console.log(res));
    }

    render() {
        return (
            <div className="container"> 
              <div className="art-con-thumb-flex">
                <img className="art-con-thumb-img" src="https://www.bleacherreport.com/img/favicon/appleTouchIcon.png" alt="bleacer-report" 
                />
                <div className="art-con-thumb-title"> Bleacher Report </div>
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

export default BR;

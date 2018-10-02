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
        newsApiBR
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
                <img className="art-con-thumb-img" src="https://www.bleacherreport.com/img/favicon/appleTouchIcon.png" alt="bleacer-report" 
                />
                <div className="art-con-thumb-title"> Bleacher Report </div>
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

export default BR;

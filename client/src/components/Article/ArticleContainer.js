import React from 'react';

const ArticleContainer = (props) => ( 
    <div className="art-con-content"> 
        <div className="art-con-title"> {props.title} </div>
        <div className="art-con-flex">
            <img className="art-con-img" src={!props.urlToImage ? '/img/no-pic.svg' : props.urlToImage} alt="post" />
            <div> 
            <div> {props.source.name} </div> <br />
            <div> {props.publishedAt.match(/[^T]*/i)[0]} </div>
            </div>
        </div>
        <div className="art-con-description"> {props.description && <span>{props.description.split(' ').slice(0, 17).join(' ')}...</span>} </div>
    </div>
)



export default ArticleContainer;
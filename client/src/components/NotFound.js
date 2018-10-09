import React, { Component } from 'react';

class NotFound extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return(
            <div className="container"> 
                <div className="notfound"> Sorry, page not found! </div>
                <div className="notfound-image"><img src="/img/bro-wink.png" alt="page not found" /></div>
            </div>
        )
    }
}

export default NotFound;
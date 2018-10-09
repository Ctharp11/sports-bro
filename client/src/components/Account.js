import React, { Component } from 'react';

class Account extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
      if(!this.props.userInfo) {
        return null 
      }
      return (
        <div className="account"> 
          <div className="container">
            <div className="account-head"> Welcome {this.props.userInfo.name}! </div>
            <div className="account-text"> Account section coming soon </div>
          </div>
        </div>
      )
    }
}

export default Account;
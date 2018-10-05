import React, { Component } from 'react';

class Account extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
      console.log(this.props.userInfo)
      if(!this.props.userInfo) {
        return null 
      }
      return (
        <div className="account"> 
          <div className="container">
            Welcome {this.props.userInfo.name}!
          </div>
         
        </div>
      )
    }
}

export default Account;
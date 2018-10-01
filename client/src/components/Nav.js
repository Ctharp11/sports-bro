import React, { Component } from 'react';

class Nav extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return (
            <nav className="nav"> 
                <div className="nav-left">
                    <div className="nav-header"> Sports Bro </div> 
                </div>
                <div className="nav-right">
                    {this.props.loggedin 
                        ?
                        <div className="nav-right-flex">
                          <div className="nav-sub"> Account </div>
                          <div className="nav-sub hover" onClick={this.props.signout}> Sign Out </div>
                        </div>
                        :
                        <div className="nav-sub hover" onClick={this.props.signin}> Sign in </div>
                    }
                    
                </div> 
            </nav>
        )
    }
}

export default Nav;
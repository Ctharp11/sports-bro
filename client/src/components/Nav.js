import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/"> <div className="nav-header"> Sports Bro </div> </Link> 
                    <div className="nav-header-sub"> All your sports news in one spot. </div>
                </div>
                <div className="nav-right">
                    {this.props.loggedin 
                        ?
                        <div className="nav-right-flex">
                          <Link to="/account"> <div className="nav-sub hover"> Account </div> </Link>
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
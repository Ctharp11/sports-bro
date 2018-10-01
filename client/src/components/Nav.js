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
            <div>
            <nav className="nav"> 
                <div className="nav-left">
                    <div className="nav-left-flex">
                      <Link to="/"> <div className="nav-header"> Sports Bro </div> </Link> 
                      <div><img className="nav-header-img" src='/img/bro-wink.png' alt="sports-bro" /></div>
                    </div>
                    <div className="nav-header-sub"> Helping you shotgun all the sports news. </div>
                    
                </div>
                <div className="nav-right">
                    {this.props.loggedin 
                        ?
                        <div className="nav-right-flex">
                          <Link to="/account"> <div className="nav-sub hover"> Account </div> </Link>
                          <div className="nav-sub hover" onClick={this.props.signout}> Sign Out </div>
                        </div>
                        :
                        <div className="nav-right-flex">
                          <div className="nav-sub hover" onClick={this.props.signin}> Sign in </div>
                        </div>
                    }
                    
                </div> 
            </nav>
            {this.props.browser.location.pathname === '/' &&
                <div className="subnav"> 
                    <div className="subnav-text"> ESPN </div>
                    <div className="subnav-text"> Bleacher Report </div>
                    <div className="subnav-text"> Fox Sports</div>
                    <div className="subnav-text"> NFL News</div>
                    <div className="subnav-text"> NHL News </div>
                    <div className="subnav-text"> Talk Sport </div>
                    <div className="subnav-text"> The Sport Bible </div>
                </div>
            }
            </div>
        )
    }
}

export default Nav;
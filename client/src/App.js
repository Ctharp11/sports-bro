import React, { Component } from 'react';
import {Route, Switch, withRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
  constructor () {
    super();
    this.state = {
      loggedin: false
    }
  }

  signin = () => {
    this.setState({ loggedin: true });
  }

  signout = () => {
    this.setState({ loggedin: false });
  }

  render() {
    const allProps = {
      browser: this.props,
      loggedin: this.state.loggedin,
      signin: this.signin,
      signout: this.signout
    }
    console.log(allProps);

    return (

      <div className="Site">
        <div className="home Site-content">
          <Nav {...allProps} />
          <Switch>

          </Switch>
        </div>
      
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Account from './components/Account';
import Main from './components/Main';
import ESPN from './components/ESPN';
import BR from './components/BR';
import FOX from './components/FOX';
import NFL from './components/NFL';
import NHL from './components/NHL';
import TALK from './components/TALK';
import BIBLE from './components/Bible';
import BBC from './components/BBC';


// import 'bootstrap/dist/css/bootstrap.min.css';

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

  checkAuth = (Component, props) => {
    if (!this.state.loggedin) {
      return <Redirect to="/" />
    }
    return <Component {...props} />
  }

  render() {
    const allProps = {
      browser: this.props,
      loggedin: this.state.loggedin,
      signin: this.signin,
      signout: this.signout
    }
    return (
      <div className="Site">
        <div className="Site-content">
          <Nav {...allProps} />
          <Switch>
            <Route exact path="/" component={Main} /> 
            <Route exact path="/account" render={ () => this.checkAuth(Account, allProps) } />
            <Route exact path="/espn" component={ESPN} />
            <Route exact path="/bleacher-report" component={BR} />
            <Route exact path="/fox-sports" component={FOX} />
            <Route exact path="/nfl-news" component={NFL} />
            <Route exact path="/nhl-news" component={NHL} />
            <Route exact path="/talk-sport" component={TALK} />
            <Route exact path="/sports-bible" component={BIBLE} />
            <Route exact path="/bbc-sports" component={BBC} />

          </Switch>
        </div>
      
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

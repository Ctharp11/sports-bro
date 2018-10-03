import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Account from './components/Account';
import Main from './components/Main/Main';
import ESPN from './components/ESPN/ESPN';
import BR from './components/BR/BR';
import FOX from './components/Fox/FOX';
import NFL from './components/NFL/NFL';
import NHL from './components/NHL/NHL';
import TALK from './components/Talk/TALK';
import BIBLE from './components/Bible/Bible';
import BBC from './components/BBC/BBC';
import Signup from './components/Signup';
import NotFound from './components/NotFound';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      loggedin: false,
      authToggle: false,
      error: ''
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
       this.toggleAuthModal();
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({ loggedin: true });
  }

  handleSignout = () => {
    this.setState({ loggedin: false });
  }

  checkAuth = (Component, props) => {
    if (!this.state.loggedin) {
      return <Redirect to="/" />
    }
    return <Component {...props} />
  } 

  handleAuthChange = (e) => {
    const { name, value }  = e.target;
    this.setState({ [name]: value })
  }

  toggleAuthModal = () => {
    this.setState({ authToggle: !this.state.authToggle })
  }

  render() {
    const allProps = {
      browser: this.props,
      loggedin: this.state.loggedin,
      signin: this.handleLogin,
      signout: this.handleSignout,
      toggleAuthModal: this.toggleAuthModal
    }
    return (
      <div className="Site">
        <div className="Site-content">
          <Nav {...allProps} />
          <div className="subnav sticky"> 
              <div className="subnav-text"><Link to="/espn"> ESPN</Link> </div> 
              <div className="subnav-text"><Link to="/bleacher-report"> Bleacher Report </Link></div>
              <div className="subnav-text"><Link to="/fox-sports"> Fox Sports </Link></div>
              <div className="subnav-text"><Link to="/nfl-news"> NFL News</Link></div>
              <div className="subnav-text"><Link to="/nhl-news"> NHL News </Link></div>
              <div className="subnav-text"><Link to="/talk-sport"> Talk Sport </Link></div>
              <div className="subnav-text"><Link to="/sports-bible"> The Sport Bible </Link></div>
              <div className="subnav-text"><Link to="/bbc-sports"> BBC Sports </Link></div>
          </div>
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
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />

          </Switch>
        </div>

        {this.state.authToggle &&
          <div className="modal-outer">
            <div className="modal-inner" ref={this.setWrapperRef}> 
            <div className="modal-close" onClick={this.toggleAuthModal}>X</div>
              <div className="modal-header"> Sign in to Sports Bro </div>
              <form onSubmit={ this.handleLogin }>
                {this.state.error !== '' && <div className="error-text">{this.state.error}</div>}
                <input className="modal-input" type="email" name="email" placeholder="Email" onChange={ this.handleAuthChange } />
                <input className="modal-input" type="password" name="password" placeholder="Password" onChange={ this.handleAuthChange } />
                <input className="modal-input-button" type="submit" />
              </form>
              <div className="modal-signup"><Link to="signup" onClick={this.toggleAuthModal}>No account? Create one here. </Link> </div>
              <div className="modal-text"> Forgot password </div>
            </div> 
          </div>
        }
      
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

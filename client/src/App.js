import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter, Link } from 'react-router-dom';
import { getUser, signInUser, logout } from './services/utils';
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
import PasswordReset from './components/PasswordReset';
import EnterNewPassword from './components/EnterNewPassword';

// import { registerUser } from './services/utils';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      loggedin: false,
      authToggle: false,
      error: '',
      news: [{ name: 'ESPN', url:'espn'}, { name: 'Bleacher Report', url:'bleacher-report'}, { name: 'Fox Sports', url:'fox-sports'}, { name: 'NFL News', url:'nfl-news'}, { name: 'NHL News', url:'nhl-news'}, { name: 'Talk Sport', url:'talk-sport'}, { name: 'The Sport Bible', url:'sports-bible'}, { name: 'BBC Sports', url:'bbc-sports'}],
      windowWidth: 0,
      userInfo: ''
    }
  }

  componentDidMount() {
    const user = localStorage.getItem('loggedin');
    if (localStorage.getItem('loggedin')){
      getUser(user)
      .then(res => { 
        this.setState({ loggedin: true });
        this.setState({ userInfo: res.data.user });
      })
      .catch(err => console.log(err))
    }
    document.addEventListener('mousedown', this.handleClickOutside);
    // this.setState({ windowWidth: window.innerWidth}, this.newsLength())
    // window.addEventListener('resize', () => {
    //   this.setState({ windowWidth: window.innerWidth}, this.newsLength)
    // })
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    // window.removeEventListener('resize', () => {
    //   this.setState({ windowWidth: window.innerWidth})
    // })
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
       this.toggleAuthModal();
    }
  }

  setUserInfo = (userInfo) => {
    this.setState({userInfo});
    console.log('userInfo', userInfo)
    this.setState({ loggedin: true });
    localStorage.setItem('loggedin', [true]);
  }

  handleLogin = (e) => {
    e.preventDefault();
    const userInfo = {
      email: this.state.email,
      password: this.state.password
    }
    signInUser(userInfo)
    .then(res => {
      this.setState({ 
        loggedin: true,
        authToggle: false,
        userInfo: res.data
       });
      localStorage.setItem('loggedin', res.data._id);
      this.props.history.push('/account');
    })
    .catch(err => console.log(err) )
  }

  handleSignout = () => {
    this.setState({ loggedin: false });
    this.setState({ userInfo: '' });
    localStorage.removeItem('loggedin');
    logout()
    .then(res => res)
    .catch(err => err)
    this.props.history.push('/');
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

  scrollLeft = () => {
    var elmnt = document.getElementById("scroll-top");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  scrollRight = () => {
    var elmnt = document.getElementById("scroll-bottom");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  render() {
    const allProps = {
      browser: this.props,
      loggedin: this.state.loggedin,
      signin: this.handleLogin,
      signout: this.handleSignout,
      toggleAuthModal: this.toggleAuthModal,
      registerUserFun: this.registerUserFun,
      setUserInfo: this.setUserInfo,
      userInfo: this.state.userInfo
    }
    return (
      <div className="Site">
        <div className="Site-content">
          <Nav {...allProps} />
          <div className="sticky">
            <div className="subnav-arrow subnav-arrow-left" onClick={this.scrollLeft}> ← </div>
            <div className="subnav"> 
            <div id="scroll-top"> </div>
            
            {
              this.state.news.map((news, index) => (
                <div className={this.props.location.pathname === `/${news.url}` ? "subnav-text-underline subnav-text" : "subnav-text"} key={index}>
                  <Link to={`/${news.url}`}> {news.name}</Link> 
               </div>
              ))
            }
            <div id="scroll-bottom"> </div>
            </div> 
            <div className="subnav-arrow subnav-arrow-right" onClick={this.scrollRight}> → </div>
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
            <Route exact path="/signup" render={() => <Signup {...allProps} />} />
            <Route exact path="/password-reset" render={() => <PasswordReset {...allProps} />} />
            <Route exact path="/account/reset/:id" component={PasswordReset} />
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
              <div className="modal-text" > <Link onClick={this.toggleAuthModal} className="modal-password" to="/password-reset"> Forgot password </Link> </div>
            </div> 
          </div>
        }
      
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);

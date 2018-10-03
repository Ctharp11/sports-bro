import React, { Component } from 'react';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            error: '',
            email: '',
            name: '',
            password: '',
            passwordConfirm: ''
        }
    }

    handleAuthChange = (e) => {
        this.setState({ error: ""});
        const { name, value }  = e.target;
        this.setState({ [name]: value })
    }

    handleSignup = (e) => {
        e.preventDefault();
        if (this.state.password === '' || this.state.name === '' || this.state.passwordConfirm === '' || this.state.email === '') {
            this.setState({ error: 'Please fill out all fields!'});
            return;
        }
        if(this.state.password !== this.state.passwordConfirm) {
            this.setState({ error: "Your passwords don't match!"})
            return;
        } 
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        this.props.registerUserFun(user)
    }

    render() {
        return(
            <div className="signup"> 
            <div className="signup-header"> Create an Account </div>
            <form onSubmit={ this.handleSignup }>
              {this.state.error !== '' && <div className="error-text">{this.state.error}</div>}
              <input className="signup-input" type="email" name="email" placeholder="Email" value={this.state.email} onChange={ this.handleAuthChange } />
              <input className="signup-input" type="text" name="name" value={this.state.name} placeholder="Name" onChange={ this.handleAuthChange } />
              <div className="signup-password">Passwords must be 8 characters long with at least one uppercase and one number.</div>
              <input className="signup-input" type="password" name="password" value={this.state.password} placeholder="Password" onChange={ this.handleAuthChange } />
              <input className="signup-input" type="password" name="passwordConfirm" placeholder="Confirm password" onChange={ this.handleAuthChange } />
              <input className="signup-input-button" type="submit" />
            </form>
            </div>
        )
    }
}

export default Signup
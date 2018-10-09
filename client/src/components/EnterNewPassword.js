import React, { Component } from 'react';
import { confirmedPasswords } from '../services/utils';

class EnterNewPassword extends Component {
    constructor() {
        super();
        this.state = {
            resetUrl: '',
            key: '',
            password: '',
            passwordConfirm: '',
            error: ''
        }
    }

    handleChange = (e) => {
        this.setState({ error: ""});
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmitReset = (e) => {
        e.preventDefault();
        if(this.state.password !== this.state.passwordConfirm) {
            this.setState({ error: "Your passwords don't match!"})
            return;
        } 
        confirmedPasswords(this.state.password)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
      return (
        <div className="container">
            <div className="pass-reset-head">
                Password reset
            </div>  
              <form className="pass-reset-form" onSubmit={this.handleSubmitReset}> 
                {this.state.error !== '' && <div className="error-text">{this.state.error}</div>}
                <div> <label className="pass-reset-label"> Enter your new password. </label> </div>
                <div> <input className="pass-reset-input" type="password" placeholder="New password" name="password" onChange={this.handleChange} /> </div>
                <div> <label className="pass-reset-label"> Confirm password. </label> </div>
                <div> <input className="pass-reset-input" type="password" placeholder="Confirm Password" name="passwordConfirm" onChange={this.handleChange} /> </div>
                <div> <input className="pass-reset-submit" type="submit" /> </div>
              </form>
        </div>
      )
    }  
}

export default EnterNewPassword;
import React, { Component } from 'react';
import { forgot, confirmedPasswords } from '../services/utils';

class PasswordReset extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            success: '',
            error: '', 
            key: '',
            password: '',
            passwordConfirm: '',
            message: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmitForgot = (e) => {
        e.preventDefault();
        forgot(this.state.email)
        .then(res => {
            if (res.data.success) {
                this.setState({success: res.data.success})
            }
            if (res.data.error) {
                this.setState({error: res.data.error})
            }
            this.setState({ 
                resetUrl: res.data.success,
                key: res.data.key
            })
        })
        .catch(err => console.log(err))
    }

    handleSubmitReset = (e) => {
        e.preventDefault();
        if(this.state.password !== this.state.passwordConfirm) {
            this.setState({ error: "Your passwords don't match!"})
            return;
        } 
        confirmedPasswords(this.state.key, this.state.password)
        .then(res => {
            if (res.data.errors) {
                this.setState({ error: res.data.errors})
            }
            if(res.data.successLogin) {
                this.props.setUserInfo(res.data);
                this.props.browser.history.push('/account');
            }
        })
        .catch(err => console.log(err))
    }

    render() {
      return (
        <div className="container">
            <div className="pass-reset-head">
                Password reset
            </div>  
            {this.state.key === ''
            ?
              <form className="pass-reset-form" onSubmit={this.handleSubmitForgot}>
                {this.state.success !== '' && <div className="success-text">{this.state.success}</div>}
                {this.state.error !== '' && <div className="success-text">{this.state.error}</div>}
                <div> <label className="pass-reset-label"> Enter email to get a password reset link. </label> </div>
                <br />
                <div> <input className="pass-reset-input" type="email" placeholder="Email" name="email" onChange={this.handleChange} /> </div>
                <br />
                <div> <input className="pass-reset-submit" type="submit" /> </div>
              </form>
            :
              <form className="pass-reset-form" onSubmit={this.handleSubmitReset}> 
                {this.state.error !== '' && <div className="error-text">{this.state.error}</div>}
                {this.state.success !== '' && <div className="success-text">{this.state.success}</div>}
                <div> <label className="pass-reset-label"> Enter your new password. </label> </div>
                <div> <input className="pass-reset-input" value={this.state.password} type="password" placeholder="New password" name="password" onChange={this.handleChange} /> </div>
                <div> <label className="pass-reset-label"> Confirm password. </label> </div>
                <div> <input className="pass-reset-input" type="password" placeholder="Confirm Password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange} /> </div>
                <div> <input className="pass-reset-submit" type="submit" /> </div>
              </form>
        
        }
             
        </div>
      )
    }  
}

export default PasswordReset;
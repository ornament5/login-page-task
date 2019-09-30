import React, { Component } from 'react';

import Input from '../../components/input/input';
import Button from '../../components/button/button';
import './login-page.scss';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '',
            password:'',
            rememberUser:false
        }
    } 
    inputChangedHandler = (e, formField) => {
        if(formField === 'rememberUser') {
            this.setState({[formField]:e.target.checked});
        } else {
            this.setState({[formField]:e.target.value});
        } 
    }

    formSubmittedHandler = (e) => {
        e.preventDefault();
        console.log(
        `===Form submitted=== 
        email:${this.state.emailAddress}
        pass: ${this.state.password}
        rememberUser: ${this.state.rememberUser}`);
    }

     render() {
         return (            
            <div className='login-page'>                
                <form onSubmit={this.formSubmittedHandler} className='login-page__form'>
                    <div className='login-page__heading'>
                        <h1 className='login-page__title'>Log into your account</h1>
                    </div>
                        <div className='login-page__form-item'>
                            <Input                                 
                                handleChange={(e) => this.inputChangedHandler(e, 'emailAddress')}
                                type='email'
                                value={this.state.emailAddress}
                                placeholder='Email address'/>
                        </div>
                        <div className='login-page__form-item'>
                            <Input                                 
                                handleChange={(e) => this.inputChangedHandler(e, 'password')}
                                type='password'
                                value={this.state.password}
                                placeholder='Password'/>
                        </div>
                        <div className={'login-page__form-item login-page__form-item--big-margin-bottom'}>
                            <Input                                 
                                handleChange={(e) => this.inputChangedHandler(e, 'rememberUser')}
                                type='checkbox'
                                isChecked={this.state.rememberUser}
                                value={true}/>
                        </div>
                    <div className='login-page__btn'>
                        <Button>Login</Button> 
                    </div>
                    <div className='login-page__footer'>
                        <a href='#' className='login-page__link'>Reset your login credentials</a>
                    </div>  
                </form>
            </div>
         );
     }
}

export default LoginPage;
import React, { Component } from 'react';

import Input from '../../components/input/input';
import Button from '../../components/button/button';
import './login-page.scss';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'login-email': '',
            'login-password':'',
            'login-checkbox':false
        }
    } 
    inputChangedHandler = (e) =>  {
        if(e.target.type === 'checkbox') {
            this.setState({[e.target.name]:e.target.checked});
        } else {
            this.setState({[e.target.name]:e.target.value});
        } 
    }

    formSubmittedHandler = (e) => {
        e.preventDefault();
        console.log(
        `===Form submitted=== 
        email:${this.state['login-email']}
        pass: ${this.state['login-password']}
        rememberUser: ${this.state['login-checkbox']}`);
    }

     render() {
         return (            
            <div className='login-page'>                
                <form onSubmit={this.formSubmittedHandler} className='login-page__form' noValidate>
                    <div className='login-page__heading'>
                        <h1 className='login-page__title'>Log into your account</h1>
                    </div>
                        <div className='login-page__form-item'>
                            <Input                                 
                                handleChange={this.inputChangedHandler}
                                type='email'
                                value={this.state['login-email']}
                                placeholder='Email address'
                                name='login-email'/>
                        </div>
                        <div className='login-page__form-item'>
                            <Input                                 
                                handleChange={this.inputChangedHandler}
                                type='password'
                                value={this.state['login-password']}
                                placeholder='Password' 
                                name='login-password'/>
                        </div>
                        <div className={'login-page__form-item login-page__form-item--big-margin-bottom'}>
                            <Input                                 
                                handleChange={this.inputChangedHandler}
                                type='checkbox'
                                isChecked={this.state['login-checkbox']}
                                name='login-checkbox'/>
                        </div>
                    <div className='login-page__button'>
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
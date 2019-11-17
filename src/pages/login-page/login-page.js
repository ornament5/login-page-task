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
            'login-checkbox':false,
            isLoading:false
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
        this.setState({isLoading:true});
        let formData = {
            email: this.state['login-email'],
            password: this.state['login-password'],
            shouldRemember: this.state['login-checkbox']
        };

        this.fetchData(formData).then((response)=>{
                    console.log(response);
                    this.setState({            
                        'login-email': '',
                        'login-password':'',
                        'login-checkbox':false,
                        isLoading:false
                    })
                }
            );      
    }

    fetchData = (formData) => {
        return fetch('http://localhost:3001/login/', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        }).then( response => {
            return response.json().then( responseData => {
                if (response.ok) {
                    if (!responseData.userName) {
                        return '======empty======';
                    } else {
                        return responseData;
                    }
                } else {
                    return responseData.errorMessage;
                }
            });
        }, error => error)
    }
    
     render() {
        const buttonText = this.state.isLoading ? 'Loading...' : 'Login';

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
                        <Button disabled={this.state.isLoading}>{buttonText}</Button> 
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
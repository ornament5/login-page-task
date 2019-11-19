import React, { Component } from 'react';

import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Loader from '../../components/loader/loader';
import AlertBox from '../../components/alert-box/alert-box';

import './login-page.scss';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'login-email': '',
            'login-password':'',
            'login-checkbox':false,
            isLoading:false,
            showAlertBox:false,
            alertBoxText:'',
            alertBoxType:null
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

        this.fetchData(formData)
            .then((response)=>{
                let alertBoxText='';
                let alertBoxType=null;
                if(response.isSuccess && !response.userName) {
                    alertBoxType='warning';
                    alertBoxText='Something went wrong during the authentication process. Please try signing in again.';
                } else {
                    alertBoxType='error';
                    alertBoxText=response.errorMessage || response.stack;                    
                }
                this.setState({            
                    'login-email': '',
                    'login-password':'',
                    'login-checkbox':false,
                    isLoading:false,
                    showAlertBox: Boolean(alertBoxType),
                    alertBoxText:alertBoxText,
                    alertBoxType:alertBoxType
                    })
                }
            );      
    }

    fetchData = (formData) => {
        return fetch('http://localhost:301/login/', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        }).then( response => {
            return response.json().then(responseData => responseData);
        }, error => error)
    }
    
    render() {
        const buttonText = this.state.isLoading ? <Loader/> : 'Login';
        let alertBox = null;
        if (this.state.showAlertBox) {
            alertBox = <div className='login-page__alert-box login-page__form-item--big-margin-bottom'>
                            <AlertBox variant={this.state.alertBoxType} 
                                      text={this.state.alertBoxText}/>
                       </div>
        }

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
                    <div className={'login-page__form-item--big-margin-bottom'}>
                        <Input                                 
                            handleChange={this.inputChangedHandler}
                            type='checkbox'
                            isChecked={this.state['login-checkbox']}
                            name='login-checkbox'/>
                    </div>
                    {alertBox}
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
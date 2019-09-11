import React, { Component } from 'react';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './LoginPage.scss';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm : {
                email: {
                    type:'email',
                    value:'',
                    placeholder:'Email address'
                },
                password: {
                    type:'password',
                    value:'',
                    placeholder:'Password'
                },
                rememberUser: {
                    type:'checkbox',
                    isChecked:false,
                    label:'Remember me'
                }
            }
        }
    }

    inputChangedHandler = (e, inputId) => {
        const updatedForm = {...this.state.loginForm};
        const updatedInput = {...updatedForm[inputId]};
        inputId === 'rememberUser' ?  updatedInput.isChecked = e.target.checked :
                                      updatedInput.value = e.target.value;
        updatedForm[inputId] = updatedInput;
        this.setState({loginForm:updatedForm});
    }

    formSubmittedHandler = (e) => {
        e.preventDefault();
        console.log(
        `===Form submitted=== 
        email:${this.state.loginForm.email.value}
        pass: ${this.state.loginForm.password.value}
        rememberUser: ${this.state.loginForm.rememberUser.isChecked}`);
    }

     render() {
         const formControls = [];
         for (let formControl in this.state.loginForm) {
            formControls.push({
                 id:formControl,
                 config:this.state.loginForm[formControl]
             });
         }
         return (            
            <div className='page'>                
                <form onSubmit={this.formSubmittedHandler} className='form'>
                    <div className='form__heading'>
                        <h1 className='form__title'>Log into your account</h1>
                    </div>
                    {formControls.map( formCtrl => (
                            <div className='form__item' key={formCtrl.id}>
                                <Input                                 
                                    changed={(e) => this.inputChangedHandler(e, formCtrl.id)}
                                    {...formCtrl.config}/>
                            </div>
                    ))}
                    <div className='form__btn'>
                        <Button>Login</Button>
                    </div>
                    <div className='form__footer'>
                        <a href='#' className='form__link from__link--centered'>Reset your login credentials</a>
                    </div>  
                </form>
            </div>
         );
     }
}

export default LoginPage;
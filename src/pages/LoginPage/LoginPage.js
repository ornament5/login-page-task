import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

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
        `===Form submitted==== 
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
             <div>
                 <div><h1>Log into your account</h1></div>
                 <div>
                    <form onSubmit={this.formSubmittedHandler}>
                        {formControls.map( formCtrl => (
                            <Input 
                                key={formCtrl.id} 
                                changed={(e) => this.inputChangedHandler(e, formCtrl.id)}
                                {...formCtrl.config}/>
                        ))}
                        <Button>Login</Button>  
                    </form>
                 </div>
                 <div>
                     <a href='#'>Reset your login credentials</a>
                 </div>
             </div>
         );
     }
}

export default LoginPage;
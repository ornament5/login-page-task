import React from 'react';
import './Input.scss';

const Input =  (props) => {
    let inputElement = null;
    switch (props.type) {
        case ('email'):
            inputElement = (
                <input type='email' className='form__text-input' value={props.value} placeholder={props.placeholder} name='email' onChange={props.changed} />
            );
            break;
        case ('password'):
            inputElement = (
                <input type='password' className='form__text-input' value={props.value} placeholder={props.placeholder} name='password' onChange={props.changed} />
            );
            break;
        case ('checkbox'):
            inputElement = (
                <div className='form__checkbox-input form__checkbox-input--left'>
                    <input type='checkbox' className='form__checkbox-field' checked={props.isChecked} onChange={props.changed} name='rememberUser' id='remember-user'/>
                    <label htmlFor='remember-user' className='form__checkbox-label'>{props.label}</label>
                </div>
            );  
            
        break;    
    }

    return inputElement;
}

export default Input;
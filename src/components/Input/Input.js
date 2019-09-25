import React from 'react';
import './Input.scss';

const Input =  ({ type, value, handleChange, isChecked = null}) => {
    let inputElement = null;
    switch (type) {
        case ('email'):
            inputElement = (
                <input type='email' className='input input--text' value={value} placeholder='Email address' name='email' onChange={handleChange} />
            );
            break;
        case ('password'):
            inputElement = (
                <input type='password' className='input input--text' value={value} placeholder='Password' name='password' onChange={handleChange} />
            );
            break;
        case ('checkbox'):
            inputElement = (
                <div className='input input--checkbox'>
                    <input type='checkbox' className='input--checkbox__field' checked={isChecked} onChange={handleChange} name='rememberUser' id='remember-user'/>
                    <label htmlFor='remember-user' className='input--checkbox__label'>Remember me</label>
                </div>
            );            
        break; 
        default:
            inputElement = (
                <input type='text' className='input input--text' value={value} name='text' onChange={handleChange} />
            );
             
    }

    return inputElement;
}

export default Input;
import React from 'react';
import './input.scss';

const Input = ({ type, value, handleChange, placeholder = null, isChecked = null}) => {
    let inputElement = null;

    if (type === 'email' || type === 'password' ) {
        inputElement = (
            <input type={type} className='input input--text' id={type} value={value} placeholder={placeholder} name={type} onChange={handleChange}  />
        );
    } else if (type === 'checkbox') {
        inputElement = (
            <div className='input input--checkbox'>
                <input type={type} className='input--checkbox__field' id='remember-user' value={value} checked={isChecked} name='rememberUser' onChange={handleChange} />
                <label htmlFor='remember-user' className='input--checkbox__label'>Remember me</label>
            </div>
        );   
    }

    return inputElement;
}

export default Input;
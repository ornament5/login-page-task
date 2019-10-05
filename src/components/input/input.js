import React from 'react';
import './input.scss';

const Input = ({ 
    type,
    value,
    handleChange,
    name,
    placeholder = null, isChecked = null}) => {
    let inputElement = null;

    if (type === 'email' || type === 'password' ) {
        inputElement = (
            <input type={type} className='input input--text' id={name} value={value} placeholder={placeholder} name={name} onChange={handleChange}  />
        );
    } else if (type === 'checkbox') {
        inputElement = (
            <div className='input input--checkbox'>
                <input type={type} className='input--checkbox__field' id={name} value={isChecked} checked={isChecked} name={name} onChange={handleChange} />
                <label htmlFor={name} className='input--checkbox__label'>Remember me</label>
            </div>
        );   
    }

    return inputElement;
}

export default Input;
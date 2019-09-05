import React from 'react';

const Input =  (props) => {
    let inputElement = null;
    switch (props.type) {
        case ('email'):
            inputElement = (
                <div>
                    <input type='email' value={props.value} placeholder={props.placeholder} onChange={props.changed}/>
                </div>
            );
            break;
        case ('password'):
                inputElement = (
                    <div>
                        <input type='password' value={props.value} placeholder={props.placeholder} onChange={props.changed}/>
                    </div>
                );
            break;
        case ('checkbox'):
                inputElement = (
                    <div>                        
                        <input type='checkbox' checked={props.isChecked} onChange={props.changed} id='remember-user'/>
                        <label htmlFor='remember-user'>{props.label}</label>
                    </div>
                );
        break;    
    }

    return inputElement;
}

export default Input;
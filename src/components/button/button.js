import React from 'react';
import './button.scss';

const Button = ({ disabled, children, onClick = null }) => {
     return ( 
        <button onClick={onClick} className='button' disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
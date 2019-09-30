import React from 'react';
import './button.scss';

const Button = ({ children, onClick = null }) => {
     return ( 
        <button onClick={onClick} className='button'>
            {children}
        </button>
    );
};

export default Button;
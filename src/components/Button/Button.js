import React from 'react';
import './Button.scss';

const Button = ({ clicked, children }) => {
     return ( 
        <button onClick={clicked} className='button'>
            {children}
        </button>
    );
};

export default Button;
import React from 'react';
import './alert-box.scss';

const AlertBox = ({text, variant}) => {
     const className= `alert-box alert-box__${variant}`;
     return ( 
        <div className={className}>
            <p className='alert-box__text'>{text}</p>
        </div>
    );
};

export default AlertBox;
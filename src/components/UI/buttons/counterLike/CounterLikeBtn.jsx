import React from 'react';
import classes from './CounterLikeBtn.module.css'

const CounterLikeBtn = ({children, ...props}) => {
    return (
        <button {...props} className={classes.addLike}>
            {children}
        </button>
    );
}

export default CounterLikeBtn;

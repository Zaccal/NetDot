import React from 'react';
import classes from './CreatePostBtn.module.css'

const CreatePostBtn = ({children, ...props}) => {
    return (
        <button {...props} className={classes.createPostBtn}>
            {children}
        </button>
    );
}

export default CreatePostBtn;

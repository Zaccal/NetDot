import React from 'react';
import classes from './ContainerPost.module.css'

const ContainerPost = React.forwardRef(({children, ...props}, ref) => {
    return (
        <div {...props} className={classes.post}>
            {children}
        </div>  
    );
})

export default ContainerPost;

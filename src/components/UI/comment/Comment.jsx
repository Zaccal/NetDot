import React from 'react';
import CounterLike from '../../CounterLike';
import classes from './Comment.module.css'

const Comment = ({title, description, deleteCommentFn, commentId, isAutherComment}) => {
    const avatarDefault = 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'


    return (
        <div className={classes.comment}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.user}>
                        <img src={avatarDefault} alt='Avatar' className={classes.avatar}></img>
                        <h4 className={classes.title}>{title}</h4>
                    </div>
                    <div className={classes.buttons}>
                        <CounterLike />
                        {isAutherComment && <button onClick={() => deleteCommentFn(commentId)}>Delete</button>}
                    </div>
                </div>
                <div className={classes.content}>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default Comment;

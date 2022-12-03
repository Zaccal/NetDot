import React from 'react';
import Post from './Post';

const PostsItems = props => {

    if (!props.props.length) {
        return <p style={{
            textAlign: 'center',
            marginTop: '30px'
        }}>На данный момент постов нет</p>
    }

    return (
        <div className='posts'>
            {props.props.map(postInfo => {

                const data = postInfo.data ? postInfo.data : new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate()

                return <Post date={data} infoValue={postInfo} key={postInfo.id}
                             fromCreater={postInfo.fromCreater} deletePostFn={props.remove}/>
            })}
        </div>
    );
}

export default PostsItems;

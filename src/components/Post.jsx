import React from 'react';
import ContainerPost from './UI/post-css-componets/ContainerPost';
import CounterLike from './CounterLike';
import DeletePostBtn from "./DeletePostBtn";
import { useNavigate } from 'react-router-dom';
import '../css/post.css'

const Post = ({infoValue, date = 'Sorry date has not, becase code wrote is so', deletePostFn}) => {
    const history = useNavigate()

    return (
        <ContainerPost>
            <div className="post__header">
                <h1 className="post__title">{ infoValue.title } <span className='date'>{ `date: ${ date }` }</span></h1>
                <CounterLike />
                <DeletePostBtn onClick={() => deletePostFn(infoValue)} />
                <button onClick={() => history(`/Posts/${infoValue.id}`)}>Открыть</button>
            </div>
            <pre className="post__description">
                { infoValue.description ? infoValue.description : infoValue.body }
            </pre>
        </ContainerPost>
    );
}

export default Post;

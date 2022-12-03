import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostService from '../components/API/PostService';
import { useFetch } from '../components/hooks/useFetch';
import Loader from '../components/UI/loader/Loader';
import Comment from '../components/UI/comment/Comment';
import ErrorModal from '../components/UI/modalError/ErrorModal';
import FormComment from '../components/FormComment';

const PostPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const [commentsPost, setCommentsPost] = useState([])
    const [visibleErrorModal, setVisibleErrorModal] = useState(false)

    const [fethedPostsId, loading, error] = useFetch(async () => {
        const response = await PostService.getById(params.id)
        const comments = await PostService.getPostElements(1, 'comments')
        setPost(response.data)
        setCommentsPost(comments.data)
    })

    const createComment = newComment => setCommentsPost([ newComment, ...commentsPost ])
    const deleteCommentFn = idCommentForDelete => setCommentsPost(commentsPost.filter(value => value.id !== idCommentForDelete) )
    const showModalFn = status => setVisibleErrorModal(status)

    useEffect(() => {
        fethedPostsId()
    }, []);

    return (
        <div className='container'>
            <br />
            <button onClick={() => navigate(-1)}>Go back</button>
            <br />
            <br />
            <div style={{
                width: '100%',
                border: '1px solid #000'
            }}>
                {
                    error && <p>{error}</p>
                }
                {
                    loading ? <Loader /> : <div style={{ padding: '10px 5px 10px 5px' }} className="content">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                }
            </div>
            <br />
            <br />
            <br />

            <FormComment createCommentFn={createComment} showError={showModalFn}/>

            <br />
            <br />
            <p>Comments: </p>
            <br />
            <div className="comments">
                {
                    commentsPost.map(value => {
                        return <Comment isAutherComment={value.isAutherComment} deleteCommentFn={deleteCommentFn} commentId={value.id} title={value.email} description={value.body} key={value.id}/>
                    })
                }
            </div>

            <ErrorModal showModal={visibleErrorModal} setShowModal={setVisibleErrorModal} showModalFn={showModalFn}/>
        </div>
    );
}

export default PostPage;
import React, {useState} from 'react';
import CreatePostBtn from '../components/UI/buttons/Form/CreatePostBtn'

const FormComment = ({createCommentFn, showError}) => {
    const [commentValue, setCommentValue] = useState('')
    
    const createNewComment = event => {
        event.preventDefault()

        if (!!commentValue) {
            const comment = {
                email: JSON.parse(localStorage.getItem('InfoUser')).login,
                body: commentValue,
                id: Date.now(),
                isAutherComment: true
            }
            createCommentFn(comment)
        }
        else {
            showError(true)
        }

        setCommentValue('')
    }

    return (
        <form className='commentForm'>
            <label htmlFor="Comment-input">Comment: </label>
            <textarea
            onChange={event => setCommentValue(event.target.value)} 
            value={commentValue} name="Comment-input" cols="30" rows="10" className="commentForm__input-comment"></textarea>
            <CreatePostBtn onClick={event => createNewComment(event)}>Add comment</CreatePostBtn>
        </form>
    );
}

export default FormComment;

import React, {useState} from 'react';
import CreatePostBtn from './UI/buttons/Form/CreatePostBtn';

const PostForm = ({create, showError, labelTitle = 'Title:', labelDesBody = 'Body:'}) => {
    const [postInfo, setPostInfo] = useState({
        title: '',
        description: '',
    })

    const checking = event => {
        event.preventDefault()
        if (postInfo.title !== '' && postInfo.description !== '') { addNewPost() }

        else {
            showError(true)
        }
    }

    const addNewPost = () => {
        const date = new Date()
        const dateCreatedPost = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
        const newPost = {title: postInfo.title, description: postInfo.description, id: Date.now(), date: dateCreatedPost}
        create(newPost)
        setPostInfo({title: '', description: '',})
    }

    return (
        <form method='get'>
            <label htmlFor="title">{labelTitle}</label><br/>
            <input value={postInfo.title} type="text" name='title'
                   onChange={event => setPostInfo({...postInfo, title: event.target.value})}/> <br/>

            <label htmlFor="description">{labelDesBody}</label> <br/>
            <textarea value={postInfo.description} name="description" cols="30" rows="10"
                      onChange={event => setPostInfo({...postInfo, description: event.target.value})}></textarea>

            <CreatePostBtn type='submit' onClick={event => {
                checking(event)
            }}>Create</CreatePostBtn>
        </form>
    );
}

export default PostForm;

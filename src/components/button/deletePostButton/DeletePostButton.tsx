import { ReactNode, useContext, ChangeEvent } from 'react'
import Global from '../../../context/Global'
import Button from "react-bootstrap/Button"

interface DeletePostButtonProps {
    children: ReactNode,
    postId: number,
    onClick?: (event?: ChangeEvent) => void
}

const DeletePostButton = ({children, postId, onClick}: DeletePostButtonProps) => {
    const {localStore, setLocalStore} = useContext(Global)

    const deletePostFn = () => { 

        if (onClick !== undefined) {
            onClick()
        }

        setTimeout(() => {
            const newPosts = localStore.myPosts.filter(post => post.postId !== postId)
            setLocalStore({...localStore, myPosts: newPosts})
        }, 1500)
    }


    return (
        <Button onClick={deletePostFn} variant="danger" title='Delete this post?'>{children}</Button>
    )
}

export default DeletePostButton
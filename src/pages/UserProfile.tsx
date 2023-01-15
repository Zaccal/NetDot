/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ProfileHeader from "../components/profile/header/ProfileHeader"
import { ApiService } from '../API/ApiService'
import { useFetch } from '../hooks/useFetch'
import { FromApiUser, PostType } from '../types/Interfaces'
import { createRandomDate } from '../utils/utilsFn'
import Post from '../components/Post/Post'
import Loader from '../components/loader/Loader'

const UserProfile = () => {
  const param = useParams<{id: string}>()
  const [user, setUser] = useState<Omit<FromApiUser, "id">>({
    username: '',
    email: '',
  })
  const [userPost, setUserPost] = useState<PostType>({
    authorLogin: '',
    postTitle: '',
    postBody: '',
    createdDate: createRandomDate(),
    postId: 0,
    userId: 0,
  })

  const [fetching, loading] = useFetch(async () => {
    const responseGetUser = await ApiService.getUserById(param.id!)
    const responseGetPost = await ApiService.getPostById(param.id!)

    setUser({
      username: responseGetUser.username,
      email: responseGetUser.email
    })

    setUserPost({...userPost, 
      authorLogin: responseGetUser.username,
      postTitle: responseGetPost.title,
      postBody: responseGetPost.body,
      postId: responseGetPost.id,
      userId: Number(param.id!)
    })
  })

  useEffect(() => {
    fetching()
  }, [])

  return (
    <div className='mt-5'>
    <Container>
        <ProfileHeader isAuthor={false} loading={loading} userLogin={user.username} userEmail={user.email}/>
        <br />
        <h2 className='mb-3'>User posts: </h2>
        {!loading ? <Post postId={userPost.postId}
        postTitle={userPost.postTitle}
        postBody={userPost.postBody}
        authorLogin={userPost.authorLogin}
        userId={userPost.userId}
        createdDate={userPost.createdDate}
        isAuthor={false}
        linkProfile={true}
        /> : <Loader />} 
    </Container>
    </div>
  )
}

export default UserProfile
import ProfileHeader from "../components/profile/header/ProfileHeader"
import { useContext } from 'react'
import Global from "../context/Global"
import { Container } from "react-bootstrap"
import List from "../components/List/List"
import Post from "../components/Post/Post"

const MyProfile = () => {
  const {localStore} = useContext(Global)
  
  return (
    <Container className="mt-5">
      <ProfileHeader isAuthor={true} avatar={localStore.defualtAvatar} userEmail={localStore.User.userEmail} userLogin={localStore.User.userLogin}/>
      <div className="mt-5">
        <h2>My Posts: </h2>
        <br />
        <List items={localStore.myPosts} renderItem={post => {
          return <Post 
            postId={post.postId} 
            postTitle={post.postTitle}
            postBody={post.postBody}
            isAuthor={true}
            createdDate={post.createdDate}
            userId={post.userId}
            avatar={post.avatar}
            authorLogin={post.authorLogin}
            key={post.postId}/>
        }}/>
      </div>
    </Container>
  )
}

export default MyProfile
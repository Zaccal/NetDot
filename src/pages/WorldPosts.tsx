/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Filter from "../components/Filter/Filter";
import List from "../components/List/List";
import Post from "../components/Post/Post";
import { useFetch } from "../hooks/useFetch";
import { ApiService } from "../API/ApiService";
import { PostType } from "../types/Interfaces";
import { Container } from "react-bootstrap";
import Loader from "../components/loader/Loader";
import Pagination from "../components/Pagination/Pagination";

const WorldPosts = () => {
  const [filteredPosts, setFilterdPosts] = useState<PostType[]>([]);
  const [staticPosts, setStaticPosts] = useState<PostType[]>([])
  let [pagePosts, setPagePosts] = useState<number>(1)
  const [totalCountPostsState, setTotalCountPosts] = useState<number>(0)
  const [fecthAPI, loading, errorMessage] = useFetch(async () => { 
    const postsFromAPI = await ApiService.getPosts(10, pagePosts)
    const totalCountPosts = await ApiService.getTotalCountPosts()

    setFilterdPosts(postsFromAPI)
    setStaticPosts(postsFromAPI)
    setTotalCountPosts(totalCountPosts)
  })

  useEffect(() => {
    fecthAPI()
  }, [pagePosts])
    

  return (
    <Container>
      <h1 className="mt-5">Filter: </h1>
      <br />
      <Filter Posts={staticPosts} setFilteredPosts={setFilterdPosts} />
      <hr />
      <br />
      {loading && <Loader />}
      {!!errorMessage && <h1 className="text-danger text-center">Error load posts: {errorMessage}</h1>}

      <List items={filteredPosts} renderItem={(item) => {
        return <Post
          isAuthor={false}
          postId={item.postId}
          postTitle={item.postTitle}
          postBody={item.postBody}
          createdDate={item.createdDate}
          userId={item.userId}
          authorLogin={item.authorLogin}
          key={item.postId}
          className="post"
        />
      }} />
      {!loading && <Pagination totalCountItems={totalCountPostsState} nowPage={pagePosts} setNowPage={setPagePosts}/>}

    </Container>
  );
};

export default WorldPosts;

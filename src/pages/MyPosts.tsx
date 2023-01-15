import { useContext, useState } from "react";
import Global from "../context/Global";
import { Container } from "react-bootstrap";
import FormCreatePost from "../components/Forms/FormCreatePost/FormCreatePost";
import Filter from "../components/Filter/Filter";
import DeleteAllPostsButton from "../components/button/deleteAllPostsButton/DeleteAllPostsButton";
import List from "../components/List/List";
import Post from "../components/Post/Post";
import AlertSure from "../components/Alert/AlertSure/AlertSure";

const MyPosts = () => {
  const { localStore, setLocalStore } = useContext(Global);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([...localStore.myPosts]);

  return (
    <Container>
      <FormCreatePost />
      <hr />
      <Filter setFilteredPosts={setFilteredPosts} Posts={localStore.myPosts} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 className="mt-5 mb-4">My posts: </h3>
        <DeleteAllPostsButton setVisibleAlert={setVisibleAlert} />
      </div>

      <List
        items={filteredPosts}
        renderItem={(MyPost) => {
          return (
            <Post
              postId={MyPost.postId}
              isAuthor={true}
              className="mb-4 animate-show"
              createdDate={MyPost.createdDate}
              authorLogin={MyPost.authorLogin}
              key={MyPost.postId}
              postTitle={MyPost.postTitle}
              postBody={MyPost.postBody}
              userId={MyPost.userId}
              avatar={MyPost.avatar}
            />
          );
        }}
      />

      <AlertSure
        visibleAlert={visibleAlert}
        ifIsNo={() => setVisibleAlert(false)}
        ifIsYes={() => {
          setVisibleAlert(false);
          setLocalStore({ ...localStore, myPosts: [] });
        }}
      />
    </Container>
  );
};

export default MyPosts;

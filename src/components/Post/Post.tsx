import { useContext, useState } from "react";
import Global from "../../context/Global";
import { PostType } from "../../types/Interfaces";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeletePostButton from "../button/deletePostButton/DeletePostButton";
import classes from "./Post.module.css";
import { isAvatar } from "../../types/guards ";

interface PostProps extends PostType {
  className?: string;
  isAuthor: boolean;
  linkProfile?: boolean
}

const Post = ({
  postTitle,
  postBody,
  authorLogin,
  createdDate,
  className,
  isAuthor,
  postId,
  userId,
  avatar,
  linkProfile
}: PostProps) => {
  const { localStore } = useContext(Global);
  const [deleteAnimate, setDeleteAnimate] = useState<boolean>(false);

  return (
    <Card className={`${className} ${deleteAnimate ? "animate-hidden" : ""}`}>
      <Card.Header style={{ display: "flex", justifyContent: "space-between" }}>
        <Link className={classes.header + ` ${linkProfile !== undefined && linkProfile ? classes.disabledLink : ''}`} to={userId === "itIsYou" ? "/Profile" : `Post/${userId}`}>
          <img
            src={isAvatar(avatar) ? avatar : localStore.defualtAvatar}
            alt="Avatar"
            className={classes.avatar}
          />
          <p className="text-muted m-0">{authorLogin}</p>
        </Link>

        <div className={classes.wrapper}>
          <p className="text-muted m-0">{createdDate}</p>
          {isAuthor && (
            <DeletePostButton onClick={() => setDeleteAnimate(true)} postId={postId}>
              Delete
            </DeletePostButton>
          )}
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="mb-3">{postTitle}</Card.Title>
        <Card.Subtitle>{postBody}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Post;

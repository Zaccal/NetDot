/* eslint-disable react-hooks/rules-of-hooks */
import Button from "react-bootstrap/Button";
import { TypeSetState } from "../../../types/types";

const DeleteAllPostsButton = ({setVisibleAlert}: {setVisibleAlert: TypeSetState<boolean>;}) => {
  return (
    <Button onClick={() => setVisibleAlert(true)} variant="outline-danger">
      Delete all posts
    </Button>
  );
};

export default DeleteAllPostsButton;

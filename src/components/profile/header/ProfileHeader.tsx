import Card from "react-bootstrap/Card";
import { UserDataType } from "../../../types/Interfaces";
import classes from "./ProfileHeader.module.css";
import { useContext } from "react";
import Global from "../../../context/Global";
import { isAvatar, isBoolean } from "../../../types/guards ";
import LeaveAccountButton from "../../button/leaveAccountButton/LeaveAccountButton";
import Placeholder from "react-bootstrap/Placeholder";
import useLeaveAccount from "../../../hooks/useLeaveAccount";

type ProfileProps = Omit<UserDataType, "userPassword" | "userPassword" | "isAuth" | "isInSystem">;
interface ProfileExtendsProps extends ProfileProps {
  avatar?: string,
  loading?: boolean,
  isAuthor: boolean,
}

const ProfileHeader = ({userLogin, userEmail, avatar, loading, isAuthor}: ProfileExtendsProps) => {
  const { localStore } = useContext(Global);
  const leaveAccountFn = useLeaveAccount()

  return (
    <>
      <Card>
        <Card.Header className={classes.cardHeader}>
          <div className={classes.header}>
            <img
              src={isAvatar(avatar) ? avatar : localStore.defualtAvatar}
              alt="avatar"
              className={classes.avatar}
            />
            <ul className={classes.userInfoList}>
              <li className="flex">Login: {isBoolean(loading) && loading ? <Placeholder animation="glow"><Placeholder xs={7} /></Placeholder>  : userLogin}</li>
              <li className="flex">Email: {isBoolean(loading) && loading ? <Placeholder animation="glow"><Placeholder xs={10} /></Placeholder> : userEmail}</li>
            </ul>
          </div>
          {isBoolean(isAuthor) && isAuthor ? <LeaveAccountButton onClick={leaveAccountFn} /> : <></>}
        </Card.Header >
      </Card>
    </>
  );
};

export default ProfileHeader;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from "./Header.module.css";
import { useContext } from "react";
import Global from "../../context/Global";
import { Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useLeaveAccount from "../../hooks/useLeaveAccount";

const Header = () => {
  const { localStore } = useContext(Global);
  const leaveAccountFn = useLeaveAccount()

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/" className={classes.container}>
            <Navbar.Brand>NetDot</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Link>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className={'nav-link'} to="/MyPosts">My posts</Link>
              <Link className={'nav-link'} to="/">World posts</Link>
              <NavDropdown title="This project" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://github.com/Zaccal">
                  My github
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/Zaccal/NetDot">
                  Repositories this project
                </NavDropdown.Item>
                <Link to="/AboutProject" className="dropdown-item">
                  About this project
                </Link>
                <NavDropdown.Divider />
                <Link to="/AboutMe" className="dropdown-item">About me</Link>
              </NavDropdown>
            </Nav>
            <Nav>
              <div className={classes.user}>
                <img
                  src={localStore.defualtAvatar}
                  alt="Avatar"
                  className={classes.avatar}
                />
                {localStore.User.isAuth && localStore.User.isInSystem ? (
                  <Dropdown className={classes.dropdown}>
                    <Dropdown.Toggle id="dropdown-basic">
                      {localStore.User.userLogin}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link to="/Profile" className="dropdown-item">My profile</Link>
                      <Dropdown.Item onClick={leaveAccountFn} className="text-danger">
                        Leave account
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Link to={'/Login'}>
                    <Button>
                      Log in
                    </Button>
                  </Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

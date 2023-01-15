import Window from "../components/window/Window";
import { UserDataType } from "../types/Interfaces";
import { useState, useContext } from "react";
import Global from "../context/Global";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AlertModal from "../components/Error/Alert/AlertModal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface stateAlertType {
  visibleAlert: boolean,
  textAlert: string,
}

const LogInPage = () => {
  const navigate = useNavigate()
  const { setLocalStore, localStore } = useContext(Global);
  const [ stateAlert, setStateAlert ] = useState<stateAlertType>({
    visibleAlert: false,
    textAlert: '',
  })

  const setVisibleAlert = (state: boolean, text: string) => {    
    if (state) {
      setStateAlert({
        visibleAlert: true,
        textAlert: text,
      })
    }

    else {
      setStateAlert({
        visibleAlert: false,
        textAlert: text,
      })
    }
  }

  const [loginData, setLoginData] = useState<UserDataType>({
    userLogin: "",
    userEmail: "",
    userPassword: "",
    isAuth: true,
    isInSystem: true,
  });

  const sendUserDataInLS = () => {
    if (loginData.userLogin === localStore.User.userLogin && 
      loginData.userEmail === localStore.User.userEmail
    ) {
      setVisibleAlert(true, 'So user already have, email and login must be other')
    }
    
    else if (
      !!loginData.userEmail &&
      !!loginData.userLogin &&
      !!loginData.userPassword
    ) {
      setLocalStore({ ...localStore, User: loginData });
      navigate('/')
    }

    else {            
      setVisibleAlert(true, 'Inputs value must be something')
    }
  };
  
  return (
    <Window>
      <AlertModal setVisible={setVisibleAlert} visible={stateAlert.visibleAlert} className="col-12 animate-show" text={stateAlert.textAlert}/>
      <h4 className="text-center">Log in</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="text"
          placeholder="Login"
          onChange={(event) =>
            setLoginData({ ...loginData, userLogin: event.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(event) =>
            setLoginData({ ...loginData, userEmail: event.target.value })
          }
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) =>
            setLoginData({ ...loginData, userPassword: event.target.value })
          }
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="col-12"
        onClick={sendUserDataInLS}
        style={{ marginBottom: '10px' }}
      >
        Log in
      </Button>
      <Link to="/SignIn" style={{textDecoration: 'none'}}>I already have account</Link>
    </Window>
  );
};

export default LogInPage;

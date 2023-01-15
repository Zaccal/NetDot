import Window from "../components/window/Window";
import AlertModal from "../components/Error/Alert/AlertModal";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useContext, useState, MouseEvent } from "react";
import Global from "../context/Global";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const {localStore, setLocalStore} = useContext(Global)
  const navigate = useNavigate()
  const [dataError, setDataError] = useState({
    visible: false,
    text: ''
  })

  const setVisibleError = (visible: boolean, text: string) => setDataError({visible, text})

  const [dataFromForm, setDataFromForm] = useState({
    userLogin: '',
    userPassword: ''
  })

  const checkAccountData = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()    
    if (
      localStore.User.userLogin === dataFromForm.userLogin && 
      localStore.User.userPassword === dataFromForm.userPassword) 
      {
      setLocalStore({...localStore, User: {...localStore.User, isInSystem: true}})
      navigate('/')
    } 
    else {
      setDataError({
        visible: true,
        text: 'So account has not'
      })
    }
  }

  return (
    <Window>
      <AlertModal className="animate-show" setVisible={setVisibleError} visible={dataError.visible} text={dataError.text}/>
      <h4 className="text-center">Sign in</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control type="text" placeholder="Login" onChange={event => setDataFromForm({...dataFromForm, userLogin: event.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={event => setDataFromForm({...dataFromForm, userPassword: event.target.value})}/>
        </Form.Group>

        <Button onClick={event => checkAccountData(event)} variant="primary" type="submit" className="col-12 mb-2">
            Sign in
        </Button>

        <Link to="/LogIn" style={{textDecoration: 'none'}}>I have not account</Link>
      </Form>
    </Window>
  );
};

export default SignInPage;
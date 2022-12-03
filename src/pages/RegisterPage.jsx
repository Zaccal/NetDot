import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import "../css/Register.css";

const RegisterPage = () => {
  const { InfoUser } = useContext(AuthContext);
  const history = useNavigate();
  const [errorShow, setErrorShow] = useState(false);
  const [errorIsHasAcc, setErrorIsHasAcc] = useState(false);
  const [inputsValue, setInputsValue] = useState({
    login: "",
    password: "",
  });
  const jsonInfoUser = JSON.stringify(inputsValue);

  const reg = () => {
    if (
      InfoUser.login !== inputsValue.login ||
      InfoUser.password !== inputsValue.password
    ) {
      if (inputsValue.login.length >= 4 && inputsValue.password.length >= 8) {
        localStorage.setItem("InfoUser", jsonInfoUser);
        history("/Posts");
      } else {
        setErrorShow(true);
      }
    } else {
      setErrorIsHasAcc(true);
    }
  };
  return (
    <div className="Home">
      <div className="window">
        <div className="window__container">
          <h2 className="title">Log in</h2>
          <form className="register">
            {errorShow && (
              <label htmlFor="isLogin" className="errorInput">
                <span>*</span> login length is must be min 4 symbols
              </label>
            )}
            {errorIsHasAcc && (
              <label htmlFor="isLogin" className="errorInput">
                <span>*</span> So account has...
              </label>
            )}
            <input
              name="isLogin"
              onChange={(event) =>
                setInputsValue({ ...inputsValue, login: event.target.value })
              }
              value={inputsValue.login}
              type="text"
              className="register__login"
              placeholder="Login or email"
            />

            {errorShow && (
              <label htmlFor="isPassword" className="errorInput">
                <span>*</span> Password text length must be min 8 symbols
              </label>
            )}
            <input
              name="isPassword"
              onChange={(event) =>
                setInputsValue({ ...inputsValue, password: event.target.value })
              }
              value={inputsValue.password}
              type="password"
              className="register__password"
              placeholder="Password"
            />
            <a className="register__btn" onClick={reg}>
              Log in
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

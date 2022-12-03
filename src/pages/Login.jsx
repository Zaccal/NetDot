import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";

const Login = () => {
    const history = useNavigate();
    const [errorShow, setErrorShow] = useState(false);
    const [inputsValue, setInputsValue] = useState({
        login: "",
        password: "",
    });

    const signIn = () => {
        const InfoUser = JSON.parse(localStorage.getItem("InfoUser"));

        if (InfoUser !== null) {
            if (
                InfoUser.login === inputsValue.login &&
                inputsValue.password === InfoUser.password
            ) {
                history("/Posts");
            } else {
                setErrorShow(true);
            }
        } else {
            setErrorShow(true);
        }
    };

    const userHaveNotAccount = () => history("/Register");

    return (
        <div>
            <div className="Home">
                <div className="window">
                    <div className="window__container">
                        <h2 className="title">Sign in</h2>
                        <form className="register">
                            {errorShow && (
                                <label htmlFor="isLogin" className="errorInput">
                                    <span>* </span>Login or password is not corract
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

                            <input
                                name="isPassword"
                                onChange={(event) =>
                                    setInputsValue({
                                        ...inputsValue,
                                        password: event.target.value,
                                    })
                                }
                                value={inputsValue.password}
                                type="password"
                                className="register__password"
                                placeholder="Password"
                            />
                            <a className="register__btn" onClick={signIn}>
                                Sign in
                            </a>

                            {errorShow && (
                                <a
                                    onClick={userHaveNotAccount}
                                    style={{
                                        color: "rgb(69, 69, 255)",
                                        fontFamily: "sans-serif",
                                        display: "block",
                                        textAlign: "center",
                                        margin: "10px 0 auto",
                                        cursor: "pointer",
                                    }}
                                >
                                    I have not account
                                </a>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

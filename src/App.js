import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import RegisterPage from "./pages/RegisterPage";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";
import "./css/app.css";
import { AuthContext } from "./context";

function App() {
    const { userInfoBool } = useContext(AuthContext);

    return (
        <div className="App">
            <Routes>
                <Route path="/Posts" element={<Posts />}></Route>
                <Route path="/Posts/:id" element={<PostPage />}></Route>
                <Route
                    path="/"
                    element={userInfoBool ? <Login /> : <RegisterPage />}
                ></Route>
                <Route path="/Register" element={<RegisterPage />}></Route>
                <Route path="/Login/" element={<Login />}></Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        </div>
    );
}

export default App;

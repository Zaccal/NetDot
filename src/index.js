import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContext } from "./context";

const InfoUser = JSON.parse(localStorage.getItem("InfoUser"));
const userInfoBool = InfoUser !== null ? true : false;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContext.Provider value={{ InfoUser, userInfoBool }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContext.Provider>
);

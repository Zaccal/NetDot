import { useContext, ReactNode } from "react";
import Global from "../../context/Global";
import { Route, Routes } from "react-router-dom";
import SignInPage from "../../pages/SignInPage";
import LogInPage from "../../pages/LogInPage";
import { PublickDataPaths, PrivateDataPaths, AnywayDataPaths } from "./DataPaths";
import WorldPosts from "../../pages/WorldPosts";

const RouteApp = () => {
    const { localStore } = useContext(Global);
    const defualtPageGet = (): ReactNode => {
        if (localStore.User.isAuth && localStore.User.isInSystem === false) {
            return <SignInPage />;
        } else if (localStore.User.isAuth === false) {
            return <LogInPage />;
        }

        return <WorldPosts />;
    };

    return (
        <Routes>
            <Route path="" element={defualtPageGet()} />
            {localStore.User.isInSystem ?
                PublickDataPaths.map((data) => {
                    return <Route path={data.path} element={data.element} key={data.id} />;
                }) :
                PrivateDataPaths.map((data) => {
                    return <Route path={data.path} element={data.element} key={data.id} />;
                })}
            {
                AnywayDataPaths.map((data) => {
                    return <Route path={data.path} element={data.element} key={data.id} />;
                })
            }
        </Routes>
    );
};

export default RouteApp;

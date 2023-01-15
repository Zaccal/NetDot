import Error404Page from "../../pages/Error404Page"
import LogInPage from "../../pages/LogInPage"
import MyPosts from "../../pages/MyPosts"
import SignInPage from "../../pages/SignInPage"
import UserProfile from "../../pages/UserProfile"
import MyProfile from "../../pages/MyProfile"
import { DataRouterItemType, DataForLSType } from "../../types/Interfaces"
import AboutMePage from "../../pages/AboutMePage/AboutMePage"
import AboutProjectPage from "../../pages/AboutProjectPage/AboutProjectPage"

const isAuthFalse = JSON.stringify({
    User: {
        isAuth: false
    }
})

const localStore: DataForLSType = JSON.parse(localStorage.getItem('DataFromLS') || isAuthFalse)
const isAuth = localStore.User.isAuth ? true : false

export const PublickDataPaths: DataRouterItemType[] = [
    {
        path: '/SignIn',
        element: <SignInPage />,
        id: 1
    },
    {
        path: '/LogIn',
        element: <LogInPage />,
        id: 2,
    },
    {
        path: '/MyPosts',
        element: <MyPosts />,
        id: 3
    },
    {
        path: '/Profile',
        element: <MyProfile />,
        id: 4,
    },
]

export const PrivateDataPaths: DataRouterItemType[] = [
    {
        path: '/SignIn',
        element: <SignInPage />,
        id: 1
    },
    {
        path: '/LogIn',
        element: <LogInPage />,
        id: 2,
    },
    {
        path: '/MyPosts',
        element: isAuth ? <SignInPage /> : <LogInPage />,
        id: 3
    },
]

export const AnywayDataPaths: DataRouterItemType[] = [
    {
        path: '*',
        element: <Error404Page />,
        id: 1
    },
    {
        path: 'Post/:id',
        element: <UserProfile />,
        id: 2,
    },
    {
        path: '/AboutProject',
        element: <AboutProjectPage />,
        id: 3,
    },
    {
        path: '/AboutMe',
        element: <AboutMePage />,
        id: 4
    }
]
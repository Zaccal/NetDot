import { ReactNode } from 'react'

export interface UserDataType {
    userLogin: string,
    userEmail: string,
    userPassword: string,
    isAuth: boolean,
    isInSystem: boolean,
}

export interface PostType {
    postId: number,
    authorLogin: string,
    postTitle: string,
    postBody: string,
    createdDate: string,
    userId: number | 'itIsYou',
    avatar?: string,
}

export interface DataForLSType {
    defualtAvatar: string,
    User: UserDataType,
    myPosts: PostType[]
}

export interface ContextType<T> {
    setLocalStore: T,
    localStore: DataForLSType,
}

// Router

export interface DataRouterItemType {
    path: string,
    element: ReactNode | undefined | null | boolean,
    id: number,  
}

// Elements

export interface OptionSelectType {
    id: number,
    name: string,
    value: string,
}

// Api interface 

export interface FromApiPostType {
    id: number,
    userId: number,
    title: string,
    body: string, 
}

export interface AddressType {
    address: string,
    city: string,
    state: string
}

export interface otherUser {
    id: number,
    login: string,
    email: string,
    avatar?: string,
    firstName: string,
    lastName: string,
    phone: string,
    address: AddressType
}


export interface FromApiUser {
    id: number,
    username: string,
    email: string,
}
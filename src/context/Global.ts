import { createContext } from "react";
import { TypeSetState } from "../types/types";
import { ContextType } from "../types/Interfaces";

const defaultState: ContextType<TypeSetState<any>> = {
    setLocalStore: () => undefined,    
    localStore: {
        defualtAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGOQ8_ZWa44gudip73QsgXG0iMzTGg1t9BUspTHE0Qw&s',
        User: {
            userLogin: 'Login',
            userEmail: '',
            userPassword: '',
            isAuth: false,
            isInSystem: false,
        },
        
        myPosts: [],
    },
} 

const Global = createContext<ContextType<TypeSetState<any>>>(defaultState)

export default Global
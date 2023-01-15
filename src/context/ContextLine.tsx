/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode } from "react";
import { DataForLSType } from "../types/Interfaces";
import Global from "./Global";
import useLocalStore from "../hooks/useLocalStore";

const KEY_NAME_LS_DATA = 'DataFromLS'

const ContextLine = ({ children }: { children: ReactNode | undefined | null}) => {
  const dataLocalStore: DataForLSType = {
    defualtAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGOQ8_ZWa44gudip73QsgXG0iMzTGg1t9BUspTHE0Qw&s",
    User: {
      userLogin: "Login",
      userEmail: "",
      userPassword: "",
      isAuth: false,
      isInSystem: false
    },

    myPosts: [],
  };

  const [dataFromLocalStore, setDataFromLocalStore] = useLocalStore(KEY_NAME_LS_DATA, dataLocalStore);

  return (
    <Global.Provider
        value={{
          setLocalStore: setDataFromLocalStore,
          localStore: dataFromLocalStore,
        }}
      >
      {children}
    </Global.Provider>
  )
};

export { ContextLine };

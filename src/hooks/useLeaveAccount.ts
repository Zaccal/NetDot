import { useContext } from "react"
import Global from "../context/Global"

const useLeaveAccount = () => {
    const {localStore, setLocalStore} = useContext(Global)

    return () => {
        setLocalStore({...localStore, User: {...localStore.User, isInSystem: false}})
    }
}

export default useLeaveAccount
import { useContext } from "react"
import { LoginContext } from "../providers/loginPorvider"

export const useAuth = () => {
    const loginContext = useContext(LoginContext)

    return loginContext
}
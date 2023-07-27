import { useContext } from "react"
import { LoginContext } from "../providers/loginPorvider"

export const useLogin = () => {
    const loginContext = useContext(LoginContext)

    return loginContext
}
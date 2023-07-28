import { useAuth } from "../hooks/useAuth";
import { Outlet } from "react-router-dom"

export const ProtectedRoutes = () =>{
    const { loading } = useAuth()
    
    if(loading){
        return (
            <div>
                <span>Carrregando a página</span>
            </div>
        )
    }
    return <Outlet/>
}
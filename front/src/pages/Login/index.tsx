import { useForm } from "react-hook-form"
import { LoginData, loginSchema } from "../../schemas/LoginSchema/validators"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLogin } from "../../hooks/useLogin"

export const Login = () =>{
    const {register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
    })

    const {login} = useLogin()
    // essa é uma maneira mais clean de chamar o use context, foi possivel ser feita pela pasat hooks

    return(
        <main>
            <h2>login</h2>
            <form onSubmit={handleSubmit(login)}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email")}/>
                <label htmlFor="password" >Senha</label>
                <input type="password" id="password" {...register("password")}/>

                <button type="submit">Entrar</button>
            </form>
        </main>
    )
}
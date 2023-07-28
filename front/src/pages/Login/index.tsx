import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, loginSchema } from "../../schemas/LoginSchema/validators";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const Navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  return (
    <>
      <button onClick={() => Navigate("/register")}>Registrar-se</button>
      <main>
        <h2>login</h2>
        <form onSubmit={handleSubmit(login)}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email")} placeholder="Email" />
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} placeholder="Senha" />
          {errors.password && <span>{errors.password.message}</span>}

          <button type="submit">Entrar</button>
        </form>
      </main>
    </>
  );
};

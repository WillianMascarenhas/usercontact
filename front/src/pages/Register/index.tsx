import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import {
  RegisterData,
  RegisterSchema,
} from "../../schemas/RegisterSchema/validators";
import { StyleMain } from "./style";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    // usa o fromState:{erros} para renderizar na tela os erros vindos do zod
    resolver: zodResolver(RegisterSchema),
  });

  const { registerUser } = useAuth();
  const Navigate = useNavigate();

  return (
    <>
      <StyleMain>
        <div className="container_resgister">
          <div className="text">
            <h2>Todos os seus contatos em um só lugar!</h2>
          </div>

          <form className="form_register" onSubmit={handleSubmit(registerUser)}>
            <label htmlFor="fullName">Nome completo</label>
            <input
              type="text"
              id="fullName"
              {...register("fullName")}
              placeholder="Nome completo"
            />
            {errors.fullName && <span>{errors.fullName.message}</span>}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Email"
            />
            {errors.email && <span>{errors.email.message}</span>}

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Senha"
            />
            {errors.password && <span>{errors.password.message}</span>}

            <label htmlFor="phone">Número de telefone</label>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              placeholder="Número de telefone"
            />
            {errors.phone && <span>{errors.phone.message}</span>}

            <div className="buttons_bottom">
              <button type="submit">Criar usuário</button>
              <button onClick={() => Navigate("/")}>Voltar</button>
            </div>
          </form>
        </div>
      </StyleMain>
    </>
  );
};

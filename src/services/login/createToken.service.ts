import { compare } from "bcryptjs";
import { AppError } from "../../Errors/app.error";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { TLoginRequest } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken"
import "dotenv/config"

export const createTokenService = async (data: TLoginRequest): Promise<any> => {
  const { email } = data;
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("invalid credentials", 403);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("invalid credentials", 403);
  }

  const token = jwt.sign(
    {userName: user.fullName},
    process.env.SECRET_KEY!,
    {expiresIn: "1d", subject: user.id.toString()}
  )

    return token
};

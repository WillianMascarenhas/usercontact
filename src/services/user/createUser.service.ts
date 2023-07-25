import { AppError } from "../../Errors/app.error";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { UserRequest, UserResponse } from "../../interfaces/user.interface";
import { userSchemasResponse } from "../../schemas/users.schemas";

export const createUserService = async (
  data: UserRequest
): Promise<UserResponse> => {
  const { email, phone } = data;
  const userRepository = AppDataSource.getRepository(User);
  const findUserEmail = await userRepository.findOneBy({
    email,
  });
  const findUserPhone = await userRepository.findOneBy({
    phone,
  });
  if (findUserEmail || findUserPhone) {
    throw new AppError("User already exists", 409);
  }

  const user = userRepository.create({
    ...data,
  });

  await userRepository.save(user);
  return userSchemasResponse.parse(user);
};

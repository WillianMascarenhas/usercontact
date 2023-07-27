import { DeepPartial } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { UserResponse, UserUpdate } from "../../interfaces/user.interface";
import { userSchemasResponse } from "../../schemas/users.schemas";
import { AppError } from "../../Errors/app.error";

export const updateUserService = async (data: UserUpdate, userId: number): Promise<UserResponse> => {
  const {email, phone} = data
  const userRepository = AppDataSource.getRepository(User);
  const oldData = await userRepository.findOneBy({id:userId})

  if (!oldData) {
    throw new AppError("User not found", 404)
}

  if(email){
    const findUserEmail = await userRepository.findOneBy({
      email,
    });
    if (findUserEmail) {
      throw new AppError("User already exists", 409);
    }
  }
  if(phone){
    const findUserPhone = await userRepository.findOneBy({
      phone,
    });
    if (findUserPhone) {
      throw new AppError("User already exists", 409);
    }
  }



  const newUserData: DeepPartial<User> = {
    ...oldData,
    ...data,
    fullName: data.fullName !== undefined ? data.fullName : oldData.fullName,
    email: data.email !== undefined ? data.email : oldData.email,
    password: data.password !== undefined ? data.password : oldData.password,
    phone: data.phone !== undefined ? data.phone : oldData.phone,
    createdAt: oldData.createdAt
  }

  const newUser = userRepository.create(newUserData)

  await userRepository.save(newUser)

  return userSchemasResponse.parse(newUser)
};

import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { UserResponse, UsersResponse } from "../../interfaces/user.interface";
import { userSchemasResponse, usersSchemaResponse } from "../../schemas/users.schemas";

export const listaUserService = async (): Promise<UsersResponse> => {
    const userRespository = AppDataSource.getRepository(User)

    const listUser = await userRespository.find()

    return usersSchemaResponse.parse(listUser)
};

export const retiveUserService = async (userId:number): Promise<UserResponse> => {
    const userRespository = AppDataSource.getRepository(User)

    const findUser = await userRespository.findOneBy({id: userId})

    return userSchemasResponse.parse(findUser)
}
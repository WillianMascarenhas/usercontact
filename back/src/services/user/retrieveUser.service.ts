import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { UsersResponse } from "../../interfaces/user.interface";
import { usersSchemaResponse } from "../../schemas/users.schemas";

export const listaUserService = async (): Promise<UsersResponse> => {
    const userRespository = AppDataSource.getRepository(User)

    const listUser = await userRespository.find()

    return usersSchemaResponse.parse(listUser)
};

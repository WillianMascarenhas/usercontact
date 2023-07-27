import { AppError } from "../../Errors/app.error";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

export const destroyUserSerice = async (userId: number): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({id: userId})
    
    if(!findUser){
        throw new AppError("User not found", 404)
    }

    userRepository.remove(findUser)
};

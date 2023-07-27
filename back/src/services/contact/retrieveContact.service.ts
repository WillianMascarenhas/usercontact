import { AppError } from "../../Errors/app.error";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { TContactsResponse } from "../../interfaces/contact.interface";
import { contactsSchemasResponse } from "../../schemas/contact.schema";
import { FindOptionsWhere } from "typeorm";


export const retriveSerivce = async (userId: number): Promise<TContactsResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const user = await userRepository.findOne({
    where: {
        id: userId
    }
  })

  if(!user){
    throw new AppError("user not found", 404)
}

  const contacts = await contactRepository.find({
    where: {
        user: user as FindOptionsWhere<User>
      }
  });

  return contactsSchemasResponse.parse(contacts)
};

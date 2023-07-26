import { AppError } from "../../Errors/app.error";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { TContactRequest } from "../../interfaces/contact.interface";
import { contactSchemas } from "../../schemas/contact.schema";

export const createContactService = async (data: TContactRequest, userId: number): Promise<any> =>{
    const {email, phone} = data
    
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if(!user){
        throw new AppError("user not found", 404)
    }

    const findContactEmail = await contactRepository.findOneBy({
        email,
      });
      const findContactPhone = await contactRepository.findOneBy({
        phone,
      });
      if (findContactEmail || findContactPhone) {
        throw new AppError("User already registered", 409);
      }
      
      const contact = contactRepository.create({
        ...data,
        user
      })

      await contactRepository.save(contact)

      return contactSchemas.parse(contact)
}
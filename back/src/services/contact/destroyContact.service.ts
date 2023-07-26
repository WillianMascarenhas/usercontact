import { AppError } from "../../Errors/app.error";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

export const destroyContactService = async (contactId: number): Promise<void> =>{
    const contactRepository = AppDataSource.getRepository(Contact);

    const contact = await contactRepository.findOneBy({ id: contactId })

    if(!contact){
        throw new AppError("Contact not found", 404)
    }

    contactRepository.remove(contact)
}
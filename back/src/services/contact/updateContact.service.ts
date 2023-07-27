import { AppError } from "../../Errors/app.error";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import {
  TContactResponse,
  TContactUpdate,
} from "../../interfaces/contact.interface";
import { contactSchemas } from "../../schemas/contact.schema";
import { DeepPartial } from "typeorm";

export const updateContactService = async (  data: TContactUpdate,  contactId: number): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const oldContact = await contactRepository.findOneBy({ id: contactId });

  if (!oldContact) {
    throw new AppError("Contact not found", 404);
  }

  const newContact: DeepPartial<Contact> = {
    ...oldContact,
    ...data,
    fullName: data.fullName !== undefined ? data.fullName : oldContact.fullName,
    email: data.email !== undefined ? data.email : oldContact.email,
    phone: data.phone !== undefined ? data.phone : oldContact.phone,
    createdAt: oldContact.createdAt,
  };

  const test = contactRepository.create(newContact);

  await contactRepository.save(test);

  return contactSchemas.parse(newContact);
};

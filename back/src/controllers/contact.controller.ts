import { Request, Response } from "express"
import { createContactService } from "../services/contact/createContact.service"
import { retriveSerivce } from "../services/contact/retriveContact.service"
import { updateContactService } from "../services/contact/updateContact.service"
import { destroyContactService } from "../services/contact/destroyContact.service"


export const createContactController = async (req: Request, res: Response) =>{
    const userId = parseInt(res.locals.userId)
    const createContact = await createContactService(req.body, userId)
    res.status(201).json(createContact)
}
export const listContactController = async (req: Request, res: Response) =>{
    const userId = parseInt(res.locals.userId)
    const list = await retriveSerivce(userId)
    return res.json(list)
}
export const updateContactController = async (req: Request, res: Response) =>{
    const contactId = parseInt(req.params.id)
    const updateContact = await updateContactService(req.body, contactId)
    return res.json(updateContact)
}
export const deleteContactController = async (req: Request, res: Response) =>{
    const contactId = parseInt(req.params.id)
    await destroyContactService(contactId)
    return res.status(204).json({})
}
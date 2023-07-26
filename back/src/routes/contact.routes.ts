import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemasRequest, contactSchemasUpdate } from "../schemas/contact.schema";
import { esureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contact.controller";
import { contactOwnerMiddleware } from "../middlewares/contactOwner.middleware";

export const contactRoutes = Router();

contactRoutes.post("",ensureDataIsValid(contactSchemasRequest), esureAuthMiddleware, createContactController);
contactRoutes.get("", esureAuthMiddleware, listContactController);
contactRoutes.patch("/:id", ensureDataIsValid(contactSchemasUpdate), esureAuthMiddleware, updateContactController);
contactRoutes.delete("/:id", esureAuthMiddleware,contactOwnerMiddleware, deleteContactController);
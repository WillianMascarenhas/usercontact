import { Router } from "express";
import { createUserController, retrieveUserController, updateUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemasRequest, userSchemasUpdate } from "../schemas/users.schemas";
import { esureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { contactOwnerMiddleware } from "../middlewares/contactOwner.middleware";

export const userRoutes = Router();

userRoutes.post("", ensureDataIsValid(userSchemasRequest), createUserController);
userRoutes.get("", retrieveUserController);
userRoutes.patch("/:id",ensureDataIsValid(userSchemasUpdate),esureAuthMiddleware, updateUserController);



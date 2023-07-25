import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemasRequest } from "../schemas/users.schemas";

export const userRoutes = Router();

userRoutes.post("/users", ensureDataIsValid(userSchemasRequest), createUserController);

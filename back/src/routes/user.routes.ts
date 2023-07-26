import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemasRequest } from "../schemas/users.schemas";
import { loginController } from "../controllers/login.controller";

export const userRoutes = Router();

userRoutes.post("/users", ensureDataIsValid(userSchemasRequest), createUserController);
userRoutes.post("/login", loginController);

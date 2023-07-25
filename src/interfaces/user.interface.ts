import { z } from "zod";
import { userSchemas, userSchemasRequest, userSchemasResponse } from "../schemas/users.schemas";

export type User = z.infer<typeof userSchemas>
export type UserRequest = z.infer<typeof userSchemasRequest>
export type UserResponse = z.infer<typeof userSchemasResponse>
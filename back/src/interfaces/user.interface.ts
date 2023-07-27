import { z } from "zod";
import { userSchemas, userSchemasRequest, userSchemasResponse, userSchemasUpdate, usersSchemaResponse } from "../schemas/users.schemas";

export type User = z.infer<typeof userSchemas>
export type UserRequest = z.infer<typeof userSchemasRequest>
export type UserResponse = z.infer<typeof userSchemasResponse>
export type UsersResponse = z.infer<typeof usersSchemaResponse>
export type UserUpdate = z.infer<typeof userSchemasUpdate>
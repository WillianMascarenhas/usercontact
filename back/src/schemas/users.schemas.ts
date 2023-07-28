import { z } from "zod";

export const userSchemas = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string(),
  createdAt: z.date(),
});

export const userSchemasRequest = userSchemas.omit({
  id: true,
  createdAt: true,
});

export const userSchemasResponse = userSchemas.omit({
  password: true,
});
export const userSchemasUpdate = userSchemas.omit({
  id: true
}).partial();

export const usersSchemaResponse = z.array(userSchemasResponse)
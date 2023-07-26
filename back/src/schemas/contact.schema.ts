import { z } from "zod";

export const contactSchemas = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  createdAt: z.date(),
});

export const contactSchemasRequest = contactSchemas.omit({
  id: true,
  createdAt: true,
  password: true,
});

export const contactSchemasUpdate = contactSchemas
  .omit({
    id: true,
  })
  .partial();

export const contactsSchemasResponse = z.array(contactSchemas);

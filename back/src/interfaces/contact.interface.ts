import { z } from "zod";
import { contactSchemasRequest, contactsSchemasResponse, contactSchemasUpdate, contactSchemas } from "../schemas/contact.schema";

export type TContactRequest = z.infer<typeof contactSchemasRequest>
export type TContactResponse = z.infer<typeof contactSchemas>
export type TContactsResponse = z.infer<typeof contactsSchemasResponse>
export type TContactUpdate = z.infer<typeof contactSchemasUpdate>

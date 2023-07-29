import * as z from "zod";

export const UpdateSchema = z.object({
  fullName: z.string().nullable(),
  email: z.string().email("Deve ser um email").nullable(),
  phone: z
    .string()
    .min(9, "Deve ter no mínimo 9 caracteres")
    .max(15, "Deve ter no máximo 15 caracteres")
    .refine(
      (value) =>
        /^(\(\d{2}\)\s?)?\d{4,5}-?\d{4}$|^\d{10}$/.test(value),
      "Formato inválido para o número de telefone"
    )
    .nullable(),
});

export interface IContact {
  id: number;
  fullName: string;
  email: string;
  phone: string;
}

export type UpdateData = Partial<IContact>;

export const CreateContactSchema = z.object({
  fullName: z.string().nullable(),
  email: z.string().email("Deve ser um email").nullable(),
  phone: z
    .string()
    .min(9, "Deve ter no mínimo 9 caracteres")
    .max(15, "Deve ter no máximo 15 caracteres")
    .refine(
      (value) =>
        /^(\(\d{2}\)\s?)?\d{4,5}-?\d{4}$|^\d{10}$/.test(value),
      "Formato inválido para o número de telefone"
    )
    .nullable(),
});

export type CreateContactData = z.infer<typeof CreateContactSchema>
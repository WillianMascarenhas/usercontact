import { z } from "zod";

export const RegisterSchema = z.object({
  fullName: z.string().nonempty("Campo obrigatório"),
  email: z.string().email("Deve ser um email"),
  password: z.string().nonempty("Campo obrigatório"),
  phone: z.string()
    .nonempty("Campo obrigatório")
    .min(9, "Deve ter no mínimo 10 caracteres")
    .max(15, "Deve ter no máximo 15 caracteres")
    .refine((value) => /^(\(\d{2}\)\s?)?\d{4,5}-?\d{4}$|^\d{10}$/.test(value), "Formato inválido para o número de telefone"),
});

type BaseUserResponse = z.infer<typeof RegisterSchema>;

export type UserResponse = Omit<BaseUserResponse, "password"> & { id: number };

export type RegisterData = z.infer<typeof RegisterSchema>

export const UpdateSchema = z.object({
  fullName: z.string().nullable(),
  email: z.string().nullable(),
  password: z.string().nullable(),
  phone: z
    .string()
    .nullable(),
});

export type UserUpdate = Partial<BaseUserResponse>;
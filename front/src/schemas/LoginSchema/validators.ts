import {z} from "zod"
export const loginSchema = z.object({
    email: z.string().email("Deve ser um email"),
    password: z.string().nonempty("Campo obrigatório")
})

export type LoginData = z.infer<typeof loginSchema>
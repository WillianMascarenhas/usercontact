import { Response, Request } from "express";
import { createTokenService } from "../services/login/createToken.service";

export const loginController = async (req: Request , res: Response) =>{
    // Fazer login e criar o token
    const createToken = await createTokenService(req.body)

    return res.json({"token":createToken})
}   
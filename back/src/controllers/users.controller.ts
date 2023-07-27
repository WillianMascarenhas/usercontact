import { Request, Response } from "express";
import { createUserService } from "../services/user/createUser.service";
import { listaUserService } from "../services/user/retrieveUser.service";
import { updateUserService } from "../services/user/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

export const retrieveUserController = async (req: Request, res: Response) => {
    const listUser = await listaUserService()

    return res.json(listUser)
};
export const updateUserController = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id)
  const updateUser = await updateUserService(req.body , userId)

  return res.json(updateUser)
};

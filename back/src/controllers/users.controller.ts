import { Request, Response } from "express";
import { createUserService } from "../services/user/createUser.service";
import { listaUserService } from "../services/user/retrieveUser.service";
import { updateUserService } from "../services/user/updateUser.service";
import { destroyUserSerice } from "../services/user/destroyUser.service";

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

export const destroyUserController = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id)
  const deleteUser = await destroyUserSerice(userId)

  return res.status(204).json({})
  
}

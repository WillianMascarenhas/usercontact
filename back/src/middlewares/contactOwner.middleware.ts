import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entity";
import { User } from "../entities/user.entity";
import { FindOptionsWhere } from "typeorm";

export const contactOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tokenHeaders = req.headers.authorization;

  const token = tokenHeaders!.split(" ")[1];

  const contactId = parseInt(req.params.id)
  let tokenId = 0;
  jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {

    tokenId = parseInt(decoded.sub);
  });

  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const user = await userRepository.findOneBy({ id: tokenId });
  console.log(user)

  const contactArr = await contactRepository.find({
    where: {
        user: user as FindOptionsWhere<User>
    }
  });
  const contactById = await contactRepository.findOneBy({
    id: contactId
  });

  const findContactOwner= contactArr.find(contact => contact.id ===contactById?.id)
  
  if(findContactOwner){
    return next()
  }
  return res.status(400).json({message: "Insufficient authorization"})

};

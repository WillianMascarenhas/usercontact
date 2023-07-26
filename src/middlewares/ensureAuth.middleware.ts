import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"
import { decode } from "punycode";

export const esureAuthMiddleware = (req:Request, res: Response, next:NextFunction) =>{
    const tokenHeaders = req.headers.authorization

    if(!tokenHeaders){
        return res.status(401).json({message: "Missing berear token"})
    }

    const token = tokenHeaders.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if(error){
            return res.status(401).json({message: "invalid credentials"})
            // basicamente é a verificação do token
        }
        res.locals.userId = decoded.id

        return next()
    })
}
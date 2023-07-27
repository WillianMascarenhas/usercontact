import { NextFunction, Request, Response } from "express";

export const userOwnerMiddleware = (req:Request, res: Response, next:NextFunction) =>{
    const userIdToken = parseInt(res.locals.userId)
    const userIdParams = parseInt(req.params.id)

    if(userIdToken != userIdParams){
        return res.status(400).json({message: "Insufficient authorization"})
    }
    return next()
}
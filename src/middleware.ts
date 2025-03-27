 import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();

let JWT_SECRET=process.env.JWT_SECRET||'';

 export const authMiddleware= (req:Request,res:Response,next:NextFunction)=>{
    const header=req.headers["authorization"];
    const decoded=  jwt.verify(header as string,JWT_SECRET);
    if(decoded){
        // @ts-ignore
        req.userId=decoded.id;
        next();
    }
    else{
        res.status(401).json({message:"Unauthorized"});
    }
 }
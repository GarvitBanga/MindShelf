import express, { json } from "express";
import { z } from "zod";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';
import {ContentModel, UserModel} from './db';

const app = express();

import * as dotenv from 'dotenv';
import { authMiddleware } from "./middleware";
dotenv.config();

let JWT_SECRET=process.env.JWT_SECRET||'';
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.post("/api/v1/signup", async (req, res) => {
    // Zod validation pending
    const username=req.body.username;
    const password=req.body.password;
    try{
        await UserModel.create({username:username,password:password});
    }catch(e){
        res.status(400).json({message:"Username already exists"});
        return;
    }
    res.json({message:"User signed up"});
});

app.post("/api/v1/signin", async(req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    const existingUser=await UserModel.findOne({username:username,password:password});
    
    if(existingUser){
        const token=jwt.sign({id:existingUser._id},JWT_SECRET);
        res.json({token:token});
        return;
    }
    else{
        res.status(400).json({message:"Invalid username or password"});
    }



});


app.post("/api/v1/content",authMiddleware, async(req, res) => {
    const link=req.body.link;
    const title=req.body.title;
    const description=req.body.description;
    const tags=req.body.tags;
    // @ts-ignore
    const userId=req.userId;
    await ContentModel.create({link:link,title:title,description:description,tags:[],userId:userId});
    res.json({message:"Content added"});
});

app.get("/api/v1/content",authMiddleware, async(req, res) => {
     // @ts-ignore
     const userId=req.userId;
     const content=await ContentModel.find({userId:userId}).populate("userId","username");
     res.json({content});
});


app.put("/api/v1/content", (req, res) => {});


app.delete("/api/v1/content", authMiddleware,async (req, res) => {
    const contentId=req.body.contentId;
    // @ts-ignore
    const userId=req.userId;
    await ContentModel.deleteMany({_id:contentId,userId:userId});
    // console.log(resp);
    res.json({message:"Content deleted"});
});



app.post("/api/v1/content/search", (req, res) => {});

app.post("/api/v1/shelf/share", (req, res) => {});


app.post("/api/v1/shelf:shareLink", (req, res) => {});








app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
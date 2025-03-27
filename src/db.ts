import mongoose from 'mongoose';
import {model,Schema} from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
const dblink = process.env.DB_LINK;
// mongoose.connect(dblink||'');
async function connectDB(){
    if(dblink===undefined){
        throw new Error("DB_LINK is not set");
    }
    await mongoose.connect(dblink);
}
connectDB();


const UserSchema=new Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
});
const ContentSchema=new Schema({
    title:{type:String,required:true},
    link:{type:String,required:true},
    description:{type:String,required:true},
    tags:[{type:mongoose.Types.ObjectId,ref:"Tag"}],
    userId:{type:mongoose.Types.ObjectId,ref:"User",required:true},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},
});
export const ContentModel=model("Content",ContentSchema);
export const UserModel= model("User",UserSchema);

    

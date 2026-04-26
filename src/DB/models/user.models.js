import mongoose, { version } from "mongoose";

export const UserSchema = mongoose.Schema({


name:{
    type:String,
    required:true,
    minLength:[3,"minLength is 3"]
},

email:{
    type:String,
    required:true
},

password:{
    type:String,
    required:true
},

phone:{
       type:String
}






},


{

toJson:true,
toObject:true,
capped:{
    size:1024 * 1024,
    max:1000
},
strict:false,



}







)





export const UserModel = mongoose.model("User" , UserSchema)
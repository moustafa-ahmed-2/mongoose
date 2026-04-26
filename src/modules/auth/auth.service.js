import { UserModel } from "../../DB/models/user.models.js";




export const register = async(req , res , next) =>{


    const {name , email , password} = req.body;

  console.log({name , email , password});
  

//   const newUser =   new UserModel({...req.body})
//    await newUser.save()

 const newUser = await   UserModel.create({...req.body})



return res.status(201).json({message:"new User created Successfully" , newUser})



}







export const findAll = async(req , res , next) =>{

 const newUser = await   UserModel.find({})

return res.status(200).json({message:"new User fetched Successfully" , newUser})

}




export const findone= async(req , res , next) =>{

    const {userId}= req.params
 const newUser = await   UserModel.findOne({_id:userId})

return res.status(200).json({message:"new User fetched Successfully" , newUser})

}














export const findId = async(req , res , next) =>{

const {userId} = req.params;

 const user = await   UserModel.findById({_id:userId})

return res.status(200).json({message:"new User created Successfully" , user})

}













export const updated = async(req , res , next) =>{

const {userId} = req.params;
console.log(req.body);

 const user = await   UserModel.findOneAndUpdate({_id:userId} , {...req.body} ,
     {new:true , runValidators:true}   )

return res.status(200).json({message:"new User created Successfully" , user})


}









export const deleted = async(req , res , next) =>{

const {userId} = req.params;


 const user = await   UserModel.findOneAndDelete({_id:userId} , {...req.body} ,
     {new:true , runValidators:true}   )

return res.status(200).json({message:"new User deleted Successfully" , user})


}


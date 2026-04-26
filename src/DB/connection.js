import mongoose from "mongoose"


 const connectDB = async ()=>{
try {
    
 mongoose.connect("mongodb://localhost:27017/Mongoose" , {
    serverSelectionTimeoutMS:1000
 }

)

 console.log("DB connected successfully");

} catch (error) {
    
console.log("Failed To connect DB");



}




}


export default connectDB





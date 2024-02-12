import mongoose,{Schema} from "mongoose";
const categoreyList=new Schema(
{
categorey: {type:String, required:true},



} 

)
export const categorey_List= mongoose.model("categoreyList",categoreyList)

import axios from "axios";
import { url } from "../config";

const  changePost  = async (id:number,post:any) => 
{
  try {
    const res = await axios.patch(`${url}/posts/${id}`,post);
    return res.data;
  } catch (error) {
   console.log(error) 
  }

}

export default changePost;
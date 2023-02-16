import axios from "axios";
import { url } from "../config";

const  deletePost  = async (id:number) => 
{
  try {
    const res = await axios.delete(`${url}/posts/${id}`);
    return res.data;
  } catch (error) {
   console.log(error) 
  }

}

export default deletePost;
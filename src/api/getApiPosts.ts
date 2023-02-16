import axios from "axios";
import { url } from "../config";

const  getApiPosts  = async () => {
  try {
    const res = await axios.get(url+'/posts');
    return res.data;
  } catch (error) {
   console.log(error) 
  }

}

export default getApiPosts;
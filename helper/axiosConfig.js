import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost/api",
}); 

export default instance;
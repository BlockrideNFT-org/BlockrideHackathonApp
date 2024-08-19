import Axios from "axios";

export default Axios.create({
 // baseURL: "https://melodic-zebra-production.up.railway.app",
  baseURL:"http://104.251.217.197:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

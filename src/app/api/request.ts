import Axios from "axios";

export default Axios.create({
  baseURL: "https://melodic-zebra-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

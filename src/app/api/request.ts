import Axios from "axios";

export default Axios.create({
  baseURL: "https://blockride-investors-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

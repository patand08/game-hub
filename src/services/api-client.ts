import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "12301327a04b469e8aa0e4540d4c40bd",
  },
});

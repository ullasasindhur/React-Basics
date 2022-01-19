import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID RItdTWxD961hmcqPvy1OALgu8jEnfH5wX_Km571M0uc",
  },
});

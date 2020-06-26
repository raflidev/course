import axios from "axios";

export default {
  getKelas() {
    return axios.get("/api.json").then((response) => response.data.kelas);
  },
};

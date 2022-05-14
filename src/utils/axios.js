import axios from "axios";
import { toast } from "react-toastify";

const getAPI = async () => {
  return await axios
    .get("https://link-server.vercel.app/api/v1/project")
    .then((res) => res.data.data)
    .catch((err) => toast.error("Server đang cập nhật!"));
};
const postAPI = async (data) => {
  return await axios
    .post("https://link-server.vercel.app/api/v1/project", data)
    .then((res) => {
      toast.success("Cập nhật thành công!");
    })
    .catch((err) => toast.error("Server đang cập nhật!"));
};
export const API = { getAPI, postAPI };

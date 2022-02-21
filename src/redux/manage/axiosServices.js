import http from "../axiosInstance";

const getAll = () => {
  return http.get("/comments");
};

const create = (data) => {
  return http.post("/comments", data);
};

const create_reply = (id, data) => {
  return http.post(`/comments/${id}`, data);
};

const update = (id, data) => {
  return http.patch(`/comments/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/comments/${id}`);
};

export default {
  getAll,
  create,
  create_reply,
  update,
  remove,
};

import request from "../utils/configAxios";
const BASE_API = "http://localhost:5000";

export function getAllTodosService(params) {
  return request(`${BASE_API}/todos`, {
    method: "GET",
    params: params,
  });
}

export const createTodoService = (body) => {
  return request(`${BASE_API}/todos`, {
    method: "POST",
    data: body,
  });
};

export const getDetailTodoService = (id) => {
  return request(`${BASE_API}/todos/${id}`, {
    method: "GET",
  });
};

export const updateTodoService = (id, body) => {
  return request(`${BASE_API}/todos/${id}`, {
    method: "PUT",
    data: body,
  });
};

export const deleteTodoService = (id) => {
  return request(`${BASE_API}/todos/${id}`, {
    method: "DELETE",
  });
};

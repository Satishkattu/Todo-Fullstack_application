import axios from "axios";

// Make sure this URL matches your backend port
const API = "http://localhost:8080/api/todos";

// GET all todos
export const getTodos = () => {
  return axios.get(API);
};

// ADD new todo
export const addTodo = (todo) => {
  return axios.post(API, todo);
};

// UPDATE todo
export const updateTodo = (id, todo) => {
  return axios.put(`${API}/${id}`, todo);
};

// DELETE todo
export const deleteTodo = (id) => {
  return axios.delete(`${API}/${id}`);
};


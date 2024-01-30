import todoTrackerAPI from "../api/api";

function getUserTodos(todos, userId) {
  return todos.filter((todo) => todo.userId === userId);
}

const getAllTodos = async (userId) => {
  const response = await todoTrackerAPI.get("/todos");
  const todos = getUserTodos(response.data, userId);
  return todos;
};

const addTodo = async (data) => {
  const response = await todoTrackerAPI.post("/todos", data);
  return response.data;
};

const deleteTodo = async (id) => {
  const response = await todoTrackerAPI.delete("/todos/" + id);
  return response.data.id;
};

const editTodo = async (data) => {
  const response = await todoTrackerAPI.put("/todos/" + data.id, data);
  return response.data;
};

export const todoTrackerTodosServices = {
  getAllTodos,
  addTodo,
  deleteTodo,
  editTodo,
};

import { apiConfig } from "../config";

export async function getTodos() {
  try {
    const response = await apiConfig.get("/todos");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch todos", error);
  }
}

export async function createTodos(todo) {
  try {
    const response = await apiConfig.post("/todos", { text: todo });
    return response.data;
  } catch (error) {
    throw new Error("Failed to create todo", error);
  }
}

export async function updateTodo(id, updatedTodo) {
  try {
    const response = await apiConfig.put(`/todos/${id}`, updatedTodo);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update todo", error);
  }
}


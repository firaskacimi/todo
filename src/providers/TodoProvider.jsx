import { useEffect, useState } from "react";
import TodoContext from "../contexts/todoContext";

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = async (text) => {
    if (text.trim() === "") return; 
    try {
      const newTodo = await createTodos(text);
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  return (
    <TodoContext.Provider
      value={{ deleteTodo, toggleComplete, addTodo, editTodo, todos }}
    >
      {children}
    </TodoContext.Provider>
  );
}

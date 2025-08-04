import React, { useContext } from "react";
import TodoContext from "../contexts/todoContext";

export default function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("must be used whithin a TodoProvider");
  }
  return context;
}

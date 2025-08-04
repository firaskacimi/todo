import { useState } from "react";
import useTodo from "../hooks/useTodo";

export default function Main() {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const { todos, addTodo, toggleComplete, deleteTodo, editTodo } = useTodo();

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditInput(text);
    const modal = document.getElementById(`edit_modal_${id}`);
    if (modal) modal.showModal();
  };

  const handleSaveEdit = () => {
    if (editInput.trim()) {
      editTodo(editId, editInput);
      setEditId(null);
      setEditInput("");
      const modal = document.getElementById(`edit_modal_${editId}`);
      if (modal) modal.close();
    }
  };

  const handleCancelEdit = () => {
    const modal = document.getElementById(`edit_modal_${editId}`);
    if (modal) modal.close();
    setEditId(null);
    setEditInput("");
  };

  return (
    <main className="w-full max-w-xl flex flex-col items-center gap-6">
      {/* Add Todo Input */}
      <div className="w-full flex items-center gap-2 bg-neutral p-4 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Create a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          className="input input-bordered w-full bg-transparent text-white"
        />
        <button
          onClick={handleAdd}
          className="btn btn-circle btn-outline text-white"
        >
          +
        </button>
      </div>

      {/* Todo List */}
      <div className="w-full bg-neutral p-4 rounded-lg shadow-lg">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between border-b border-base-300 py-2"
          >
            {/* Left side */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="checkbox checkbox-primary"
              />
              <span
                className={`text-white ${todo.completed ? "line-through" : ""}`}
              >
                {todo.text}
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="btn btn-sm btn-ghost text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-sm btn-ghost text-white"
              >
                <img src="./images/icon-cross.svg" alt="Delete" />
              </button>
            </div>

            {/* Modal */}
            <dialog id={`edit_modal_${todo.id}`} className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Todo</h3>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
                  className="input input-bordered w-full my-4"
                />
                <div className="modal-action flex gap-2">
                  <button className="btn btn-primary" onClick={handleSaveEdit}>
                    Save
                  </button>
                  <button className="btn" onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </main>
  );
}

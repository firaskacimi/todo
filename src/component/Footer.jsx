import useTodo from "../hooks/useTodo";

export default function Footer() {
  const { todos } = useTodo();

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <footer className="w-full max-w-xl bg-neutral mt-6 p-4 rounded-lg flex flex-col items-center gap-2 shadow-lg">
      <p className="text-white">
        {remaining} item{remaining !== 1 ? "s" : ""} left
      </p>
      <div className="flex gap-4 text-white">
        <button className="btn btn-link text-info no-underline">All</button>
        <button className="btn btn-link text-info no-underline">Active</button>
        <button className="btn btn-link text-info no-underline">
          Completed
        </button>
      </div>
      <button className="btn btn-link text-white no-underline">
        Clear Completed
      </button>
    </footer>
  );
}

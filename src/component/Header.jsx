import useTheme from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex justify-between gap-74 items-center mb-8 ">
      <h1 className="text-4xl font-bold text-white tracking-widest">TODO</h1>

      {/* theme button */}
      <button
        onClick={toggleTheme}
        className="btn btn-ghost hover:bg-transparent hover:border-0"
      >
        <img
          src={
            theme === "dark" ? "/images/icon-sun.svg" : "/images/icon-moon.svg"
          }
          alt="Change theme color"
          className="w-6 h-6"
        />
      </button>
    </header>
  );
}

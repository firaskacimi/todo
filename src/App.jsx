import { useEffect, useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import useTheme from "./hooks/useTheme";
import useTodo from "./hooks/useTodo";
import TodoProvider from "./providers/todoProvider";

export default function App() {
  const { theme } = useTheme();

  return (
    <TodoProvider>
      <div
        className="min-h-screen bg-base-100 bg-no-repeat flex flex-col items-center justify-start pt-12 px-4"
        style={{
          backgroundImage: `url(/images/bg-desktop-${theme}.jpg)`,
          backgroundSize: "100vw 100vh",
        }}
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </TodoProvider>
  );
}

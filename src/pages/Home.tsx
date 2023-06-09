import React from "react";
import LoginUserInfo from "../components/LoginUserInfo";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div>
      <LoginUserInfo />
      <TodoList />
    </div>
  );
}

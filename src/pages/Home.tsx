import React from "react";
import LoginUserInfo from "../components/LoginUserInfo";
import TodoList from "../components/TodoList";
import AddTodoButton from "../components/AddTodoButton";

export default function Home() {
  return (
    <div>
      <LoginUserInfo />
      <AddTodoButton />
      <TodoList />
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

import { GetSingleTodo } from "../states/TodoData";

export default function Todo({ todo }: { todo: GetSingleTodo }) {
  const navigate = useNavigate();
  return (
    <div onClick={(): void => navigate(`/todos/${todo.id}`)}>{todo.todo}</div>
  );
}

import React from "react";
import { GetSingleTodo } from "../states/TodoData";

export default function Todo({ todo }: { todo: GetSingleTodo }) {
  return <div>{todo.todo}</div>;
}

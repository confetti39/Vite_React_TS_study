import React from "react";
import { useNavigate } from "react-router-dom";
import { GetSingleTodo } from "../states/TodoData";
import styles from "./styles/Todo.module.css";
import { Checkbox } from "@mui/material";

export default function Todo({ todo }: { todo: GetSingleTodo }) {
  const navigate = useNavigate();

  return (
    <div className={styles.todo}>
      <Checkbox checked={todo.completed} />
      <span
        className={`${styles.todoContent} ${
          todo.completed ? styles.checked : ""
        }`}
        onClick={(): void => navigate(`/todos/${todo.id}`)}
      >
        {todo.todo}
      </span>
    </div>
  );
}

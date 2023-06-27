import React from "react";
import { useNavigate } from "react-router-dom";
import { GetAllTodo, GetSingleTodo, todoData } from "../states/TodoData";
import styles from "./styles/Todo.module.css";
import { Checkbox } from "@mui/material";
import axios from "axios";
import { useRecoilState } from "recoil";
import useAxiosPut from "../hooks/useAxiosPut";

export default function Todo({ todo }: { todo: GetSingleTodo | null }) {
  // router
  const navigate = useNavigate();

  // axios
  const { sendData } = useAxiosPut(`https://dummyjson.com/todos/${todo?.id}`);

  // handler
  const handleUpdate = async () => {
    sendData({
      completed: !todo?.completed,
    });
  };

  return (
    <div className={styles.todo}>
      <Checkbox
        checked={todo?.completed !== undefined ? todo.completed : false}
        onChange={handleUpdate}
      />
      <span
        className={`${styles.todoContent} ${
          todo?.completed ? styles.checked : ""
        }`}
        onClick={(): void => navigate(`/todos/${todo?.id}`)}
      >
        {todo?.todo ? todo.todo : ""}
      </span>
    </div>
  );
}

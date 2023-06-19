import React from "react";
import { useNavigate } from "react-router-dom";
import { GetAllTodo, GetSingleTodo, todoData } from "../states/TodoData";
import styles from "./styles/Todo.module.css";
import { Checkbox } from "@mui/material";
import axios from "axios";
import { useRecoilState } from "recoil";

export default function Todo({ todo }: { todo: GetSingleTodo }) {
  const navigate = useNavigate();
  const [fetchTodos, setFetchTodos] = useRecoilState(todoData);
  const handleUpdate = async (): Promise<void> => {
    await axios
      .put(
        `https://dummyjson.com/todos/${todo.id}`,
        {
          completed: !todo.completed,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        let array: GetAllTodo = { ...fetchTodos };
        let index: number = array.todos.findIndex(
          (item) => item.id === todo.id
        );

        array.todos[index].completed = res.data.completed;
        setFetchTodos(array);
      });
  };

  return (
    <div className={styles.todo}>
      <Checkbox
        checked={todo.completed !== undefined ? todo.completed : false}
        onChange={handleUpdate}
      />
      <span
        className={`${styles.todoContent} ${
          todo.completed ? styles.checked : ""
        }`}
        onClick={(): void => navigate(`/todos/${todo.id}`)}
      >
        {todo.todo ? todo.todo : ""}
      </span>
    </div>
  );
}

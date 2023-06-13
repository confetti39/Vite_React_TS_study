import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { pageNumber, todoData } from "../states/TodoData";
import Todo from "./Todo";
import PaginationCOMP from "./PaginationCOMP";
import styles from "./styles/TodoList.module.css";

export default function TodoList() {
  const navigate = useNavigate();
  const [todos, setTodos] = useRecoilState(todoData);
  const [pageCount, setPageCount] = useRecoilState(pageNumber);
  const countPerPage = 30;
  const getTodos = async (): Promise<void> => {
    await axios
      .get(
        `https://dummyjson.com/todos?limit=${countPerPage}&skip=${
          (pageCount - 1) * countPerPage
        }`
      )
      .then((res) => {
        setTodos(res.data);
      });
  };

  useEffect(() => {
    getTodos();
    navigate(`/home/${pageCount}`);
  }, [pageCount]);

  return (
    <div className={styles.todoList}>
      {todos.todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      <div className={styles.pagination}>
        <PaginationCOMP total={todos.total} countPerPage={countPerPage} />
      </div>
    </div>
  );
}

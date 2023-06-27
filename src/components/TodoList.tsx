import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { pageNumber, todoData } from "../states/TodoData";
import Todo from "./Todo";
import PaginationCOMP from "./PaginationCOMP";
import styles from "./styles/TodoList.module.css";
import { useAxiosGet } from "../hooks/useAxiosGet";

export default function TodoList() {
  const navigate = useNavigate();

  const countPerPage = 30;
  const { fetchData: getTodos, todos, pageCount } = useAxiosGet(countPerPage);

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

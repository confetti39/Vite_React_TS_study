import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import { GetAllTodo, pageNumber } from "../states/TodoData";
import Todo from "./Todo";
import PaginationCOMP from "./PaginationCOMP";
import styles from "./styles/TodoList.module.css";
import useAxiosGet from "../hooks/useAxiosGet";

export default function TodoList() {
  // router
  const navigate = useNavigate();

  // local
  const pageCount = useRecoilValue(pageNumber);
  const countPerPage: number = 30;
  const url: string = `https://dummyjson.com/todos?limit=${countPerPage}&skip=${
    (pageCount - 1) * countPerPage
  }`;

  //axios
  const { fetchData: getTodos, data: todos } = useAxiosGet<GetAllTodo>(url);

  useEffect(() => {
    getTodos();
    navigate(`/home/${pageCount}`);
  }, [pageCount]);

  return (
    <div className={styles.todoList}>
      {todos?.todos?.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
      <div className={styles.pagination}>
        <PaginationCOMP
          total={todos ? todos.total : 0}
          countPerPage={countPerPage}
        />
      </div>
    </div>
  );
}

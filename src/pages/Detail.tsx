import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetSingleTodo } from "../states/TodoData";
import LoginUserInfo from "../components/LoginUserInfo";
import DetailButtons from "../components/DetailButtons";
import styles from "./styles/Detail.module.css";
import Header from "../components/Header";
import Todo from "../components/Todo";
import useAxiosGet from "../hooks/useAxiosGet";

export default function Detail() {
  const { todoId } = useParams();
  const { fetchData: getTodo, data } = useAxiosGet<GetSingleTodo>(
    `https://dummyjson.com/todos/${todoId}`
  );

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <LoginUserInfo />
      </div>
      <Header />
      <div className={styles.todo}>
        <Todo todo={data} />
        <DetailButtons todoId={todoId} />
      </div>
    </div>
  );
}

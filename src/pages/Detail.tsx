import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetSingleTodo, initialTodoData, singleTodo } from "../states/TodoData";
import LoginUserInfo from "../components/LoginUserInfo";
import DetailButtons from "../components/DetailButtons";
import { useRecoilState } from "recoil";
import styles from "./styles/Detail.module.css";
import Header from "../components/Header";
import Todo from "../components/Todo";

export default function Detail() {
  const { todoId } = useParams();
  const [todo, setTodo] = useRecoilState(singleTodo);
  const getTodo = async () => {
    await axios
      .get(`https://dummyjson.com/todos/${todoId}`)
      .then((res) => setTodo(res.data));
  };

  useEffect(() => {
    getTodo();
  }, []);
  // todo?.todo, todo?.completed

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <LoginUserInfo />
      </div>
      <Header />
      <Todo todo={todo} />
      <DetailButtons todoId={todoId} />
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetSingleTodo, initialTodoData } from "../states/TodoData";
import LoginUserInfo from "../components/LoginUserInfo";
import DetailButtons from "../components/DetailButtons";

export default function Detail() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState<GetSingleTodo>(initialTodoData.todos[0]);
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
    <div>
      <LoginUserInfo />
      <h1>{todo.todo}</h1>
      <DetailButtons todoId={todoId} />
    </div>
  );
}

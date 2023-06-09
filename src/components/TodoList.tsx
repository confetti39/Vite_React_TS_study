import React, { useEffect } from "react";
import { GetSingleTodo, todoData } from "../states/TodoData";
import { useRecoilState } from "recoil";
import axios from "axios";
import Todo from "./Todo";

export default function TodoList() {
  useEffect(() => {
    getTodos();
  }, []);

  const [todos, setTodos] = useRecoilState(todoData);
  const getTodos = async (): Promise<void> => {
    await axios.get("https://dummyjson.com/todos").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div>
      {todos.todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

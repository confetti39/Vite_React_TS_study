import React from "react";
import LoginUserInfo from "../components/LoginUserInfo";
import TodoList from "../components/TodoList";
import AddTodoButton from "../components/AddTodoButton";
import styles from "./styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.logoutButton}>
        <LoginUserInfo />
      </div>
      <div className={styles.addButton}>
        <AddTodoButton />
      </div>
      <TodoList />
    </div>
  );
}

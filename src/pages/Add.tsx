import React from "react";
import LoginUserInfo from "../components/LoginUserInfo";
import TodoInput from "../components/TodoInput";
import styles from "./styles/Add.module.css";

export default function Add() {
  return (
    <>
      <div className={styles.button}>
        <LoginUserInfo />
      </div>
      <TodoInput type="add" todoId={undefined} />
    </>
  );
}

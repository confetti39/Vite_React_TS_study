import React, { useState } from "react";
import LoginUserInfo from "../components/LoginUserInfo";
import TodoInput from "../components/TodoInput";
import styles from "./styles/Add.module.css";
import Header from "../components/Header";

export default function Add() {
  const [addMode, setAddMode] = useState<boolean>(false);
  return (
    <>
      <div className={styles.loginInfo}>
        <LoginUserInfo />
      </div>
      <Header />
      <div className={styles.input}>
        <TodoInput type="add" todoId={undefined} setEditMode={setAddMode} />
      </div>
    </>
  );
}

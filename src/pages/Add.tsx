import React from "react";
import LoginUserInfo from "../components/LoginUserInfo";
import TodoInput from "../components/TodoInput";

export default function Add() {
  return (
    <>
      <LoginUserInfo />
      <TodoInput type="add" todoId={undefined} />
    </>
  );
}

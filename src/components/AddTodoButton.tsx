import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddTodoButton.module.css";

export default function AddTodoButton() {
  const navigate = useNavigate();
  const handleAddTodo = () => {
    navigate(`/add`);
  };
  return (
    <>
      <Button variant="contained" onClick={handleAddTodo}>
        추가하기
      </Button>
    </>
  );
}

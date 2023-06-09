import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

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

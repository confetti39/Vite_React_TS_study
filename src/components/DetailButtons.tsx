import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TodoInput from "./TodoInput";

export default function DetailButtons({
  todoId,
}: {
  todoId: string | undefined;
}) {
  const navigate = useNavigate();
  const [isOpenInput, setOpenInput] = useState<boolean>(false);
  const handleDelete = (): void => {
    axios.delete(`https://dummyjson.com/todos/${todoId}`);
    navigate(`/home`);
  };
  const handleEdit = (): void => {
    setOpenInput(true);
  };
  return (
    <>
      <IconButton onClick={handleDelete} aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton onClick={handleEdit} aria-label="delete" size="large">
        <EditIcon fontSize="inherit" />
      </IconButton>
      {isOpenInput ? <TodoInput type={"edit"} todoId={todoId} /> : null}
    </>
  );
}

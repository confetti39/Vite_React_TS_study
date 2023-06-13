import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
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

  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (): void => {
    axios.delete(`https://dummyjson.com/todos/${todoId}`);
    navigate(`/home`);
  };
  const handleEdit = (): void => {
    setOpenInput((prev) => !prev);
  };
  return (
    <>
      <IconButton onClick={handleEdit} aria-label="delete" size="large">
        <EditIcon fontSize="inherit" />
      </IconButton>
      <IconButton onClick={handleClickOpen} aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"정말 삭제하시겠습니까?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            다시 복구되지 않습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button
            onClick={() => {
              handleClose();
              handleDelete();
            }}
            autoFocus
          >
            삭제
          </Button>
        </DialogActions>
      </Dialog>

      <div>
        {isOpenInput ? (
          <TodoInput type={"edit"} todoId={todoId} setEditMode={setOpenInput} />
        ) : null}
      </div>
    </>
  );
}

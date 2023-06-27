import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { useRecoilState } from "recoil";
import { singleTodo } from "../states/TodoData";
import { useNavigate } from "react-router-dom";
import useAxiosPost from "../hooks/useAxiosPost";
import useAxiosPut from "../hooks/useAxiosPut";

export default function TodoInput({
  type,
  todoId,
  setEditMode,
}: {
  type: "edit" | "add";
  todoId: string | undefined;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // router
  const navigate = useNavigate();

  // local
  const [text, setText] = useState<string>("");

  // axios
  const { sendData: postTodo } = useAxiosPost(
    `https://dummyjson.com/todos/add`
  );
  const { sendData: putTodo } = useAxiosPut(
    `https://dummyjson.com/todos/${todoId}`
  );

  // handler
  const handleSubmit = (): void => {
    switch (type) {
      case "edit":
        putTodo({
          todo: text,
        });
        setEditMode(false);
        break;

      case "add":
        postTodo({
          todo: text,
          completed: false,
          userId: 5,
        });
        navigate(`/`);
        break;
    }
  };
  return (
    <div>
      <TextField
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          setText(e.target.value);
        }}
        id="outlined-basic"
        label="투두"
        variant="outlined"
        sx={{ width: "25rem", margin: "0.5rem" }}
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        sx={{ height: "3rem", margin: "0.5rem" }}
      >
        {type === "edit" ? "수정하기" : "추가하기"}
      </Button>
    </div>
  );
}

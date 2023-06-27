import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { useRecoilState } from "recoil";
import { singleTodo } from "../states/TodoData";
import { useNavigate } from "react-router-dom";
import useAxiosPost from "../hooks/useAxiosPost";

export default function TodoInput({
  type,
  todoId,
  setEditMode,
}: {
  type: "edit" | "add";
  todoId: string | undefined;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useRecoilState(singleTodo);
  const postUrl = `https://dummyjson.com/todos/add`;
  const putUrl = `https://dummyjson.com/todos/${todoId}`;
  const { sendData: postTodo, data } = useAxiosPost(postUrl);
  const handleSubmit = (): void => {
    switch (type) {
      case "edit":
        axios
          .put(
            putUrl,
            {
              todo: text,
            },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => setTodo(res.data))
          .then(() => setEditMode(false));

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

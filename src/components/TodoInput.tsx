import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

export default function TodoInput({
  type,
  todoId,
}: {
  type: "edit" | "add";
  todoId: string | undefined;
}) {
  const [text, setText] = useState<string>("");
  const handleSubmit = (): void => {
    switch (type) {
      case "edit":
        axios.put(`https://dummyjson.com/todos/${todoId}`, {
          headers: { "Content-Type": "application/json" },
          data: JSON.stringify({
            todo: text,
          }),
        });
        break;

      case "add":
        fetch("https://dummyjson.com/todos/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            todo: text,
            completed: false,
            userId: 5,
          }),
        });
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
      />
      <Button onClick={handleSubmit} variant="contained">
        {type === "edit" ? "수정하기" : "추가하기"}
      </Button>
    </div>
  );
}

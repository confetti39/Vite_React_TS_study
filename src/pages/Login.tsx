import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userId, userPassword } from "../states/User";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useRecoilState(userId);
  const [password, setPassword] = useRecoilState(userPassword);
  const handleLogIn = () => {
    if (!(id && password)) return;
    navigate(`/home`);
    localStorage.setItem("id", id);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setId(id);
      navigate(`/home`);
    }
  }, []);

  return (
    <>
      <div>
        <TextField
          label="아이디"
          variant="outlined"
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            setId(e.target.value);
          }}
        />
        <TextField
          label="비밀번호"
          variant="outlined"
          type="password"
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            setPassword(e.target.value);
          }}
        />
        <Button variant="contained" onClick={handleLogIn}>
          로그인
        </Button>
      </div>
    </>
  );
}

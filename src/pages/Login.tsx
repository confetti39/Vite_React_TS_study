import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userId, userPassword } from "../states/User";
import Header from "../components/Header";
import styles from "./styles/Login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useRecoilState(userId);
  const [password, setPassword] = useRecoilState(userPassword);
  const handleLogIn = () => {
    if (!(id && password)) return;
    navigate(`/home`);
    localStorage.setItem("id", id);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleLogIn();
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setId(id);
      navigate(`/home`);
    }
  }, []);

  return (
    <div className={styles.loginBox}>
      <Header />
      <div className={styles.id}>
        <TextField
          label="아이디"
          variant="outlined"
          sx={{ width: 500 }}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            setId(e.target.value);
          }}
        />
      </div>
      <div className={styles.password}>
        <TextField
          label="비밀번호"
          variant="outlined"
          type="password"
          sx={{ width: 500 }}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            setPassword(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={styles.button}>
        <Button variant="contained" onClick={handleLogIn} sx={{ width: 500 }}>
          로그인
        </Button>
      </div>
    </div>
  );
}

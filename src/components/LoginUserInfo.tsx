import React from "react";
import { useRecoilState } from "recoil";
import { userId } from "../states/User";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./styles/LoginUserInfo.module.css";

export default function LoginUserInfo() {
  // router
  const navigate = useNavigate();

  // local
  const [id, setId] = useRecoilState(userId);

  // handler
  const handleLogOut = (): void => {
    localStorage.removeItem("id");
    setId("");
    navigate(`/`);
  };

  return (
    <div>
      <span className={styles.id}>{id}님 환영합니다.</span>
      <Button variant="contained" onClick={handleLogOut}>
        로그아웃
      </Button>
    </div>
  );
}

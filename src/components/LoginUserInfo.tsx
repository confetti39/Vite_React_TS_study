import React from "react";
import { useRecoilState } from "recoil";
import { userId } from "../states/User";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginUserInfo() {
  const navigate = useNavigate();
  const [id, setId] = useRecoilState(userId);
  const handleLogOut = (): void => {
    localStorage.removeItem("id");
    setId("");
    navigate(`/`);
  };

  return (
    <div>
      <header onClick={() => navigate(`/`)}>TODO LIST</header>
      {id}님 환영합니다.
      <Button variant="contained" onClick={handleLogOut}>
        로그아웃
      </Button>
    </div>
  );
}

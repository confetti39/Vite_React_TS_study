import React from "react";
import styles from "./styles/Header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const iconUrl = new URL("../assets/to-do.png", import.meta.url).href;
  return (
    <header className={styles.container}>
      <img
        src={iconUrl}
        className={styles.logo}
        alt="todo icon"
        onClick={() => navigate(`/`)}
      />
      <header className={styles.header} onClick={() => navigate(`/`)}>
        TODO LIST
      </header>
    </header>
  );
}

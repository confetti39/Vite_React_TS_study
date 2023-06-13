import React from "react";
import styles from "./styles/Header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header} onClick={() => navigate(`/`)}>
      TODO LIST
    </header>
  );
}

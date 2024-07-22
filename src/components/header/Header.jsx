import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>To do Application</h1>
      </div>
    </div>
  );
};

export default Header;

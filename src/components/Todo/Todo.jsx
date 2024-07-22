import React from "react";
import styles from "./Todo.module.css";
import del from "../../images/delete.svg";
import change from "../../images/pencil.svg";
//contentEditable="true"
const Todo = ({ task, toggleComlited, deleteTodo, editTodo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div
          title="click to cross out"
          onClick={() => toggleComlited(task.id)}
          className={`${styles.task} ${
            task.isCompleted ? `${styles.complited}` : ""
          }`}
        >
          {task.task}
        </div>

        <div className={styles.rowBtn}>
          <a className={styles.btn} onClick={() => editTodo(task.id)}>
            <img className={styles.img} src={change} alt="" />
          </a>
          <a className={styles.btn} onClick={() => deleteTodo(task.id)}>
            <img className={styles.img} src={del} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Todo;

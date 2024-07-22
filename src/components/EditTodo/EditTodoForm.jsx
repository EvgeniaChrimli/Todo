import React from "react";
import styles from "./EditTodo.module.css";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="Update your task"
          className={styles.input}
        />
        <button className={styles.btn} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;

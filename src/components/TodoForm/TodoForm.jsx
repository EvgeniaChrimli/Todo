import React from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            required={true}
            onChange={onChange}
            value={value}
            type="text"
            placeholder="Enter your task"
            className={styles.input}
          />
          <button className={styles.btn} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;

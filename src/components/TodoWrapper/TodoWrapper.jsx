import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/Todo";
import EditTodoForm from "../EditTodo/EditTodoForm";
import styles from "./TodoWrapper.module.css";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todolist")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (todo) => {
    const newItem = {
      id: uuidv4(),
      task: todo,
      isCompleted: false,
      edited: false,
    };
    setTodos([...todos, newItem]);

    const item = todos.map((item) => item.task);
    setLocal((todos) => [...todos, item]);
  };

  const toggleComlited = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, edited: !todo.edited } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, edited: !todo.edited } : todo
      )
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <TodoForm addTodo={addTodo} todos={todos} />
        {todos.map((todo, index) =>
          todo.edited ? (
            <EditTodoForm key={index} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleComlited={toggleComlited}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodoWrapper;

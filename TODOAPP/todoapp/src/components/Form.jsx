import styles from "./form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form className={styles.todoform} onSubmit={handlesubmit}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.modernInput}
          type="text"
          placeholder="Enter todo item"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

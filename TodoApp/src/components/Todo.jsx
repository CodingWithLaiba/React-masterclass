import { useState } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {todoList.map((item) => (
        // <h3 key={item}>{item}</h3>
        <TodoList item={item} key={item} />
      ))}
    </div>
  );
}

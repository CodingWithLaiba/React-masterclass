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
      <form
        className="bg-white mt-12 rounded-md p-5 m-auto shadow-xl w-125 flex"
        onSubmit={handleSubmit}
      >
        <input
          className="block w-full border-none text-black text-[16px] focus:outline-0"
          placeholder="Enter TodoList ..."
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="border-none bg-yellow-300 inline-block rounded-sm text-white py-2.5 px-4 cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </form>
      <div className="bg-white rounded-md w-125 mt-12 mx-auto shadow-2xl">
        {todoList.map((item) => (
          // <h3 key={item}>{item}</h3>
          <TodoList
            item={item}
            key={item}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </div>
    </div>
  );
}

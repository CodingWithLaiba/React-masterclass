import { useState } from "react";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todo, setTodo] = useState({ name: "", completed: false });
  const [todoList, setTodoList] = useState([]);
  const completeTodos = todoList.filter((todo) => todo.completed).length;
  const totaltodos = todoList.length;
  const sortedTodos = todoList
    .slice()
    .sort((a, b) => Number(a.completed) - Number(b.completed));
  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo({ name: "", completed: false });
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
          value={todo.name}
          onChange={(e) =>
            setTodo({
              ...todo,
              name: e.target.value,
            })
          }
        />
        <button
          className="border-none bg-yellow-300 inline-block rounded-sm text-white py-2.5 px-4 cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </form>

      <div className="bg-white rounded-md w-125 mt-12 mx-auto shadow-2xl">
        {sortedTodos.map((item) => (
          // <h3 key={item}>{item}</h3>
          <TodoList
            item={item}
            key={item.name}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </div>
      <Footer completeTodos={completeTodos} totaltodos={totaltodos} />
    </div>
  );
}

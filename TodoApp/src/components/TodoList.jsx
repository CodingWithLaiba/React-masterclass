export default function TodoList({ item, todoList, setTodoList }) {
  function handleDelete(item) {
    console.log(item, "Deleted");
    setTodoList(todoList.filter((todo) => todo !== item)); //filter make the new of after deleting the specific item
  }
  return (
    <div className="w-125 text-[#353935] text-xl mx-auto px-6">
      <div className="flex justify-between items-center font-bold text-xl py-5">
        <span>{item}</span>
        <button
          onClick={() => handleDelete(item)}
          className="bg-amber-300 text-white border-none py-2.5 px-4.5 rounded-sm cursor-pointer"
        >
          X
        </button>
      </div>
      <hr className="border border-[#f4f4f4]" />
    </div>
  );
}

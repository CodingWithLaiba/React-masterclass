
export default function Footer({completeTodos,totaltodos}) {
  return (
    <div className="fixed flex gap-7 justify-center bottom-0 text-xl font-bold text-center w-full bg-yellow-300 p-2.5">
        <span>Complete Todos: {completeTodos}</span>
        <span>Total Todos: {totaltodos}</span>
    </div>
  )
}

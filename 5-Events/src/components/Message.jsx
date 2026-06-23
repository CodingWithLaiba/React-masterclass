export default function Message() {
    function handleClick() {
        console.log("Hi I am Clicked")
    }
  return (
   <button onClick={handleClick}>Click me and check console</button>
  )
}

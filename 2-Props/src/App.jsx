import Hello from "./components/Hello";

function App() {
  // const setNumber = [1, 2, 3];
  const person1 = {
    message: "Hiii",
    name: "Rob",
    setNumber: [1, 2, 3],
  };
  const person2 = {
    message: "Hello",
    name: "nike",
    setNumber: [1, 3, 3],
  };

  return (
    <>
      <Hello person={person1} />
      <Hello person={person2} />
    </>
  );
}

export default App;

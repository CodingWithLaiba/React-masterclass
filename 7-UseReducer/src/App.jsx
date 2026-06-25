import { useReducer, useState } from "react";

export default function App() {
  // const [count, setCount] = useState(0); // count increment with useState

  // useReducer using simple variable numbr
  // const [state, dispatch] = useReducer(reducer, 0);
  // function reducer(state, action) {
  //   if (action.type == "Increment") {
  //     return state + action.payload;
  //   } else if (action.type == "decrement") {
  //     return state - action.payload;
  //   }
  // }

  // useReducer using the complex object
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    if (action.type == "Increment") {
      return { ...state, count: state.count + action.payload };
    } else if (action.type == "decrement") {
      return { ...state, count: state.count - action.payload };
    }
  }
  return (
    <>
      {/* <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div> */}
      <div>
        {/* <p>{state}</p> */}
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "Increment", payload: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          decrement
        </button>
      </div>
    </>
  );
}

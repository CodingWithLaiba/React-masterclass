import { useReducer, useState } from "react";
import BankAccount from "./componet/BankAccount";

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
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    if (action.type == "Increment") {
      return { ...state, count: state.count + state.incrementBy };
    } else if (action.type == "decrement") {
      return { ...state, count: state.count - action.payload };
    }
    if (action.type == "setIncrement") {
      return { ...state, incrementBy: action.payload };
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
        <input
          type="text"
          value={state.incrementBy}
          onChange={(e) =>
            dispatch({ type: "setIncrement", payload: Number(e.target.value) })
          }
        />
        <button onClick={() => dispatch({ type: "Increment", payload: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          decrement
        </button>
      </div>
      <div>
        <BankAccount/>
      </div>
    </>
  );
}

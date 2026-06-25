import { useReducer, useState } from "react";

export default function BankAccount() {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);
  function reducer(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.paylod };
    } else if (action.type == "sub") {
      return { ...state, balance: state.balance - action.paylod };
    }
  }
  return (
    <div>
      BankAccount
      {state.balance}
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        name=""
        id=""
      />
      <button
        onClick={() => dispatch({ type: "add", paylod: Number(amount) })}
      >
        Diposit
      </button>
      <button
        onClick={() => dispatch({ type: "sub", paylod: Number(amount) })}
      >
        WithDraw
      </button>
    </div>
  );
}

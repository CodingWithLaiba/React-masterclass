import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const [value, setValue] = useState("");
  //   const { setUser } = useContext(UserContext);

  const { dispatch } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    // setUser(value);
    dispatch({ type: "login", payload: value });
    setValue("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

import { useContext, useState } from "react";
import { UserContext } from "../App";

export default function Login() {
  const [value, setValue] = useState("");
  const { user,setUser } = useContext(UserContext);
  function handleSubmit(e){
    e.preventDefault()
    setUser(value)
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

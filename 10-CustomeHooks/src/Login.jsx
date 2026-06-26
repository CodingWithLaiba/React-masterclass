import { useState } from "react";
import useLocalStorage from "./hooks/LocalStorage";

export default function Login() {
  const [value, setValue] = useState("");
  const [userValue, setUser] = useLocalStorage();
  function hundleSubmit() {
    setUser(value);
  }
  return (
    <div>
      Login
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={hundleSubmit}>Login</button>
    </div>
  );
}

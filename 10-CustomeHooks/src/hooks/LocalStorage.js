import { useState } from "react";

export default function useLocalStorage() {
  function setUser(value) {
     setUserValue(value);
    localStorage.setItem("user", value);
  }
  function getUser() {
    const user = localStorage.getItem("user");
    return user;
  }
      const [userValue,setUserValue] = useState(()=>getUser())

  return [userValue,setUser]
}

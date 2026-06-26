import { createContext, useState } from "react";
import Checkout from "./components/Checkout";
import Login from "./components/login";

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState("guest");
  return (
    <>
    <UserContext.Provider value={{ user,setUser }}>
      <Login />
      <Checkout />
    </UserContext.Provider>
    </>
  );
}

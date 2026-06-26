import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Logout() {
  //   const { setUser } = useContext(UserContext);
  const { dispatch } = useContext(UserContext);

  return (
    <div>
      {/* <button onClick={() => setUser("guest")> */}

      <button onClick={() => dispatch({ type: "logout", payload: "guest" })}>
        Logout
      </button>
    </div>
  );
}

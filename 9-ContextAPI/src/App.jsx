import Checkout from "./components/Checkout";
import Login from "./components/login";
import Logout from "./components/Logout";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <>
      <UserProvider>
        <Login />
        <Checkout />
        <Logout />
      </UserProvider>
    </>
  );
}

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/products/1"}>Product</Link>
    </div>
  )
}

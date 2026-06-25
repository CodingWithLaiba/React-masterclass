import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>
      This is Dashboard
      <Outlet/>
    </div>
  );
}

export default Dashboard;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard/profile",{state:{userName}});
  }

  return (
    <div>
      HomePage
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        name=""
        id=""
      />
      <button onClick={handleClick}>Go to profile page </button>
    </div>
  );
}

export default HomePage;

import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    // e.preventdefault();
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={handleClick}>LogOut</button>
    </>
  );
}

export default Home;

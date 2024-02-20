import React, { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { authenticated } = useAuth();
  //   const history = useHistory();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      //   history.push("/");
      navigate("/");
    }
  }, [authenticated]);

 

  return (
    <>
      <h2>Home page</h2>
    </>
  );
};

export default Home;

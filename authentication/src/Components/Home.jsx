import axios from "axios";
import React, { useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setData(res.data.users);
      })
      .catch((err) => err.message);
  }

  return (
    <div>
      <h2 className="text-center my-2">User Details</h2>

      {data.map((user) => (
        <div className="card offset-lg-3 col-lg-6 my-3" key={user.id}>
          <div className="card-header">
            Name:{" "}
            <b>
              {user.firstName} {user.lastName}
            </b>
          </div>
          <div className="card-body">
            <p className="card-text">User Name: {user.username}</p>
            <p className="card-text">Email: {user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

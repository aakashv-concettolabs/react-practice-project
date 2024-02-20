import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      axios
        .post("https://dummyjson.com/auth/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          console.log("data", res.data);
          localStorage.setItem("token", res.data.token);
          navigate("/home");
        });
    }
  };

  const validation = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      alert("Please enter username");
    }

    if (password === "" || password === null) {
      result = false;
      alert("Please enter password");
    }
    return result;
  };

  return (
    <div className="row my-5">
      <div className="offset-lg-3 col-lg-6">
        <form onSubmit={handleFormSubmit} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group my-2">
                <label>User Name</label>
                <input
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group my-2">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

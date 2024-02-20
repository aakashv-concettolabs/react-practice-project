import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    updateData();
  }, []);

  function updateData() {
    axios
      .get(`https://65c5b4e8e5b94dfca2e02f34.mockapi.io/crud-opration/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
      });
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://65c5b4e8e5b94dfca2e02f34.mockapi.io/crud-opration/${id}`, {
        name,
        email,
      })
      .then(() => {
        history("/read");
      });
    setName(""), setEmail("");
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", margin: "auto" }}>Update Details</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className="btn btn-primary"
          onClick={() => history("/read")}
          style={{ marginLeft: "10px" }}
        >
          Back
        </button>
      </form>
    </div>
  );
}

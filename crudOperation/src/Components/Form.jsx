import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || name.length < 2) {
      setShow(true);
    } else {
      setShow(false);
      axios
        .post("https://65c5b4e8e5b94dfca2e02f34.mockapi.io/crud-opration", {
          name: name,
          email: email,
        })
        .then(() => {
          history("/read");
        });
      setName(""), setEmail("");
    }
  };

  const handleDisplay = (e) => {
    e.preventDefault();
    history("/read");
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", margin: "auto" }}>Create Form</h2>

      <button className="btn btn-primary mb-4" onClick={handleDisplay}>
        Display user list
      </button>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
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
          onClick={handleSubmit}
        >
          Submit
        </button>
        <div className="my-3">{show && <p>Enter proper details</p>}</div>
      </form>
    </div>
  );
}

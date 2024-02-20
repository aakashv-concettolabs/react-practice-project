import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Read() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const addUser = useNavigate();

  const getData = async () => {
    await axios
      .get("https://65c5b4e8e5b94dfca2e02f34.mockapi.io/crud-opration")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
  };

  function handleDelete(id) {
    axios
      .delete(`https://65c5b4e8e5b94dfca2e02f34.mockapi.io/crud-opration/${id}`)
      .then(() => getData());
  }

  useEffect(() => {
    getData();
  }, []);

  const handleUser = (e) => {
    e.preventDefault();
    addUser("/");
  };

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "auto" }}>Details </h2>
      <button className="btn btn-primary m-2" onClick={handleUser}>
        Add user
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {isLoading ? (
          <h5 style={{ margin: "20px", textAlign: "center" }}>
            Thoda Sabar kr bhai
          </h5>
        ) : (
          <tbody>
            {data.map((eachData, index) => (
              <tr key={eachData.id}>
                <th scope="row">{index + 1}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <Link to={`/update/${eachData.id}`}>
                    <button className="btn-success">Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn-danger"
                    onClick={() => {
                      handleDelete(eachData.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
}

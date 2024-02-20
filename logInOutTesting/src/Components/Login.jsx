import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const form = useForm();
  const { handleSubmit, register, formState } = form;
  const { error } = formState;
  const navigate = useNavigate();

  const handleFormSubmit = (detail) => {
    axios
      .post("https://dummyjson.com/auth/login", {
        username: detail.username,
        password: detail.password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("email", res.data.email);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <h2>Login</h2>
        <div>
          <label>User Name: </label>
          <input
            type="text"
            {...register("username", { required: "Username is mandatory" })}
          />
        </div>

        <br />
        <div>
          <label>Password: </label>
          <input
            type="password"
            {...register("password", { required: "Password is mandatory" })}
          />
        </div>

        <br />
        <button>Login</button>
      </form>
    </>
  );
}

export default Login;

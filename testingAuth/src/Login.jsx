import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const form = useForm();
  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const location = useLocation();

  const onFormSubmit = (detail) => {
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

    if (navigate("/")) {
      localStorage.removeItem("email");
    }
  };

  return (
    <>
      <div className="row my-5">
        <div className="offset-lg-3 col-lg-6">
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="container"
            noValidate
          >
            <div className="card">
              <div className="card-header">
                <h2>User Login</h2>
              </div>
              <div className="card-body">
                <div className="form-group my-2">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />
                </div>
                <p style={{ color: "red" }}>{errors.username?.message}</p>
                <div className="form-group my-2">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 4,
                        message: "password must be more than 4 character",
                      },
                      maxLength: {
                        value: 15,
                        message: "password cannot be more than 15 character",
                      },
                    })}
                  />
                </div>
                <p style={{ color: "red" }}>{errors.password?.message}</p>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </form>
          {/* <DevTool control={control} /> */}
        </div>
      </div>
    </>
  );
}

export default Login;

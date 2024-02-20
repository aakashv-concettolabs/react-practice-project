import { useFormik } from "formik";
import React from "react";
import { singUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: singUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div>
      <h1>Registeration</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "15px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? <p>{errors.name}</p> : null}
        </div>
        <div style={{ margin: "15px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : null}
        </div>
        <div style={{ margin: "15px" }}>
          <label htmlFor="password">Password:</label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          {errors.password && touched.password ? (
            <p>{errors.password}</p>
          ) : null}
        </div>
        <div style={{ margin: "15px" }}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p>{errors.confirmPassword}</p>
          ) : null}
        </div>
        <button style={{ margin: "15px" }} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;

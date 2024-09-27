import React, { useEffect, useState } from "react";
import "./LoginSingup.css";
import { useFormik } from "formik";
import useSubmit from "../../hook/useSubmit";
import * as Yup from "yup";

export default function LoginSingup() {
  const { isLoading, response, submit } = useSubmit();

  const [state, setState] = useState("Singup");

  const [wrongPassword, setWrongPassword] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      submit(values, state);
    },
    validationSchema: Yup.object({
      name: state === "Singup" ? Yup.string().required("Required") : null,
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.data.success) {
        localStorage.setItem("auth-token", response.data.token);
        window.location.replace("/");
      } else {
        if (response.data.error === 2) setWrongPassword(" wrong in password ");
        if (response.data.error === 1) setWrongPassword("wrong in Email");
        if (response.data.error === 0)
          setWrongPassword("This email has already been used");
      }
    }
  }, [response]);

  return (
    <div className="loginSingup">
      <div className="loginSingup-contianer">
        <h1>{state}</h1>
        <div className="loginSingup-fields">
          <form onSubmit={formik.handleSubmit}>
            {state === "Singup" && (
              <div className="container-input-wrong">
                <input
                  type="text"
                  name="name"
                  id="name"
                  {...formik.getFieldProps("name")}
                  placeholder="Your Name"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="wrong">{formik.errors.name}</div>
                ) : null}
              </div>
            )}

            <div className="container-input-wrong">
              <input
                type="email"
                name="email"
                id="email"
                {...formik.getFieldProps("email")}
                placeholder="Email Address"
              />
              <div className="wrong">
                {" "}
                {response &&
                  !response.data.success &&
                  (response.data.error === 1 || response.data.error === 0) &&
                  wrongPassword}
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="wrong">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="container-input-wrong">
              <input
                type="password"
                name="password"
                id="password"
                {...formik.getFieldProps("password")}
                placeholder="Password"
              />
              <div className="wrong">
                {" "}
                {response &&
                  !response.data.success &&
                  response.data.error == 2 &&
                  wrongPassword}
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="wrong">{formik.errors.password} </div>
              ) : null}
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Continue"}
            </button>
          </form>
        </div>
        <div className="loginSingup-login">
          Already Have an Account?{" "}
          <span
            onClick={() => {
              setState(state === "Singup" ? "Login" : "Singup");
            }}
          >
            {state === "Singup" ? "LogIn" : "SignUp"} Here
          </span>
        </div>
        <div className="loginSingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

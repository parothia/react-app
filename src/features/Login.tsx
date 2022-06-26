import React from "react";
import { useFormik } from "formik";
import Button from "../components/Button";
import TextBox from "../components/Textbox/Textbox";
import logo from "../images/minion.png";
function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="form-container pt-24 flex flex-col justify-center">
      <div className="logo mb-4">
        <img src={logo} alt="logo" className="logo w-14 pr-4 mx-auto" />
      </div>
      <div className="form-card box-border">
        <div className="header mb-8 text-white text-3xl text-center">
          Sign in to Parothia
        </div>
        <div className="form-card-inner w-80 sm:w-96 px-4 sm:px-8 py-8 sm:py-8 m-auto border-solid border-2 rounded border-slate-300 bg-slate-200 shadow-xl">
          <TextBox
            label="Username or email address "
            placeholder="Email"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <TextBox
            label="Password "
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button
            btnName="Sign in"
            testId="sign-in"
            onClick={formik.handleSubmit}
          />
        </div>
        <div className="new-account text-center my-4 w-80 sm:w-96 py-4 m-auto border-solid border-2 rounded border-slate-300 bg-slate-200 shadow-xl">
          New to Parothia?
          <span className="create-account text-cyan-500">
            Create an account
          </span>
        </div>
      </div>
    </div>
  );
}
export default Login;

import React from "react";
import Button from "../components/Button";
import TextBox from "../components/Textbox/Textbox";
import logo from "../images/minion.png";
function Login() {
  return (
    <div className="form-container min-h-full flex flex-col justify-center">
      <div className="logo mb-4">
        <img src={logo} alt="logo" className="logo w-14 pr-4 mx-auto" />
      </div>
      <div className="form-card box-border">
        <div className="header mb-8 text-white text-3xl text-center">
          Sign in to Parothia
        </div>
        <div className="form-card-inner w-96 px-8 py-8 m-auto border-solid border-2 rounded border-slate-300 bg-slate-200 shadow-xl">
          <TextBox label="Username or email address " placeholder="Email" />
          <TextBox label="Password " placeholder="Password" />
          <Button btnName="Sign in" testId="sign-in" />
        </div>
        <div className="new-account text-center my-4 w-96 py-4 m-auto border-solid border-2 rounded border-slate-300 bg-slate-200 shadow-xl">
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

import React from "react";
import TextBox from "../components/Textbox/Textbox";
function Login() {
  return (
    <div className="main-container text-center justify-center flex p-10 ">
      <div className="container mt-5 border w-1/3 max-w-sm  rounded overflow-hidden shadow-lg bg-slate-300">
        <div className="header mb-8 text-blue-600 text-2xl">Login</div>
        <TextBox label="Username:" placeholder="Email" />
        <TextBox label="Password: " placeholder="Password" />
        <button type="submit" className="login mb-4">
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;

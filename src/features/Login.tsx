import React from "react";
import { useFormik } from "formik";
import Button from "../components/Button";
import TextBox from "../components/Textbox/Textbox";
import logo from "../images/minion.png";
import axios from "axios";
import { hostname } from "os";
import Close from "../components/close";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./store/featureSlice";
import { LoginReducerState } from "./store/featureSlice";

const Login = () => {
  const isLogin = useSelector(
    (state: LoginReducerState) => state.loginReducer.login
  );
  const isNewLogin = useSelector(
    (state: LoginReducerState) => state.loginReducer.newLogin
  );

  const dispatch = useDispatch();

  const hostName = `${process.env.REACT_APP_BASE_URL}`;
  const DOMAIN_NAME = `${process.env.HOST}`;
  const baseURL = `${
    hostName[hostName.length - 1] === "/"
      ? hostName.substring(0, hostName.length - 1)
      : hostName
  }`;

  const handleClose = () => {
    dispatch(Actions.setLogin(isLogin));
  };

  const handleNewSignIn = () => {
    dispatch(Actions.setLogin(isLogin));
    dispatch(Actions.setNewLogin(isNewLogin));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      axios.post(`${baseURL}/api/v1/login`, values).then((response: any) => {
        console.log(response);
      });
    },
  });

  return (
    <div className="login-card box-border fixed top-20 left-0 w-full z-99">
      <div className="form-container flex flex-col justify-center ">
        {/* <div className="logo mb-4">
        <img src={logo} alt="logo" className="logo w-14 pr-4 mx-auto" />
      </div> */}
        <div className="form-card box-border mx-auto my-8 px-2">
          <div className="color-outer bg-slate-300 p-4 rounded">
            <div className="heading justify-center">
              <div className="close-img right-0">
                <Close onclose={handleClose} />
              </div>
              <div className="header mb-4 text-blue-less text-3xl text-center font-medium">
                Sign in to Parothia
              </div>
            </div>
            <div className="form-card-inner mx-2 sm:mx-6 min-w-80 sm:w-96 px-4 sm:px-8 py-8 sm:py-8 border-solid border-2 rounded border-slate-300 bg-slate-200 shadow-xl">
              <TextBox
                label="Username or email address "
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
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
            <div className="new-account text-center mx-2 sm:mx-6 pr-11 my-4 sm:w-96 py-4 border-solid border-2 rounded border-slate-300 bg-slate-200 shadow-xl">
              New to Parothia?
              <span className="create-account text-blue-less">
                <button id="btn-sign-n" onClick={handleNewSignIn}>
                  Create an account
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

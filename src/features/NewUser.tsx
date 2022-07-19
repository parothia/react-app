import React from "react";
import { useFormik } from "formik";
import Button from "../components/Button";
import TextBox from "../components/Textbox/Textbox";
import logo from "../images/minion.png";
import axios from "axios";
import { hostname } from "os";
import Close from "../components/close";
import { useDispatch, useSelector } from "react-redux";
import { LoginReducerState } from "./store/featureSlice";
import * as Actions from "./store/featureSlice";

const NewUser = () => {
  const hostName = `${process.env.REACT_APP_BASE_URL}`;
  const DOMAIN_NAME = `${process.env.HOST}`;
  const baseURL = `${
    hostName[hostName.length - 1] === "/"
      ? hostName.substring(0, hostName.length - 1)
      : hostName
  }`;

  const dispatch = useDispatch();
  const isNewLogin = useSelector(
    (state: LoginReducerState) => state.loginReducer.newLogin
  );
  const handleClose = () => {
    dispatch(Actions.setNewLogin(isNewLogin));
  };

  const callVerifyEmail = (email: string): void => {
    console.log("verify");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      contact: "",
      firstName: "",
      lastName: "",
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      axios
        .post(`${baseURL}/api/v1/user`, values)
        .then((response: any) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div className="login-card box-border fixed top-20 left-0 w-full z-99 min-h-fit">
      <div className="form-container flex flex-col justify-center ">
        <div className="form-card box-border mx-auto my-8 px-2">
          <div className="color-outer bg-slate-300 p-4 m-auto rounded">
            <div className="heading justify-center">
              <div className="close-img right-0">
                <Close onclose={handleClose} />
              </div>
              <div className="header mb-4 text-blue-less text-3xl text-center font-medium">
                Welcome to Parothia
              </div>
            </div>
            <div className="form-card-inner mx-2 sm:mx-6 w-80 sm:w-96 px-4 sm:px-8 py-8 sm:py-8 border-solid border-2 rounded border-slate-300 bg-slate-200 shadow-xl">
              <TextBox
                label="Email address "
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={() => callVerifyEmail(formik.values.email)}
              />
              <TextBox
                label="Contact "
                placeholder="contact"
                name="contact"
                onChange={formik.handleChange}
                value={formik.values.contact}
              />
              <TextBox
                label="firstName "
                placeholder="firstName"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <TextBox
                label="lastName "
                placeholder="lastName"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              <Button
                btnName="Register"
                testId="register"
                onClick={formik.handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewUser;

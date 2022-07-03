import React, { Reducer, useState } from "react";
import codeImg from "../../images/code.svg";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { LoginReducerState, LoginState } from "../store/featureSlice";
import Navbar from "../navbar";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const isLogin = useSelector(
    (state: LoginReducerState) => state.loginReducer.login
  );
  const isNewLogin = useSelector(
    (state: LoginReducerState) => state.loginReducer.newLogin
  );

  return (
    <div className="no">
      <div className="content-section flex mt-12">
        <div className="content-left max-w-2xl">
          <h1 className="main-txt text-left text-5xl font-bold text-blue-more">
            Free Modern React Templates for every need.
          </h1>
          <p className="left-text mt-4 font-normal max-w-lg">
            Easily customizable modern React UI Templates and Components built
            using TailwindCSS which are also lightweight and simple to setup.
            All components are modular and fully responsive for great mobile
            experience as well as big desktop screens. Brand Colors are also
            fully customizable. Free for personal as well as commercial use.
          </p>
        </div>
        <div className="content-right px-28">
          <img src={codeImg} alt="code-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

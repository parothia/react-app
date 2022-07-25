import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import logo from "../../images/tlogo.png";
import { LoginReducerState } from "../store/featureSlice";
import * as Actions from "../store/featureSlice";
import Login from "../Login";
import NewUser from "../NewUser";
import "./Navbar.css";
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector(
    (state: LoginReducerState) => state.loginReducer.login
  );
  const isNewLogin = useSelector(
    (state: LoginReducerState) => state.loginReducer.newLogin
  );
  const handleLogin = () => {
    dispatch(Actions.setLogin(isLogin));
    setShowFeatList(false);
  };

  const handleNewSignIn = () => {
    dispatch(Actions.setNewLogin(isNewLogin));
    setShowFeatList(false);
  };

  const handleLQA = () => {
    navigate("/react-app/lqa");
  };

  const handleCrypto = () => {
    setShowFeatList(false);
    navigate("/react-app/crypto");
  };
  const handleHome = () => {
    setShowFeatList(false);
    navigate("/react-app");
  };

  const [showFeatList, setShowFeatList] = useState(false);

  const showFeatures = () => {
    setShowFeatList(!showFeatList);
  };
  return (
    <div className="navbar flex justify-between items-center mb-4 relative border-b-2 border-blue-more">
      {isLogin && <Login />}
      {isNewLogin && <NewUser />}
      <div className="left-bar">
        <img
          src={logo}
          alt="logo"
          onClick={handleHome}
          className="logo h-20 min-w-[5rem] w-20 hover:cursor-pointer"
        />
      </div>
      <div
        className={`p-4 space-y-2 bg-blue-less rounded shadow absolute ${
          showFeatList ? "shake-lr" : ""
        } right-4 sm:hidden hover:cursor-pointer z-10`}
        onClick={showFeatures}
      >
        <span className="block w-12 h-0.5 bg-gray-100 animate-pulse"></span>
        <span className="block w-12 h-0.5 bg-gray-100 animate-pulse"></span>
        <span className="block w-12 h-0.5 bg-gray-100 animate-pulse"></span>
      </div>
      <div
        className={`right-list  sm:block bg-blue-less absolute sm:bg-almost-white sm:static rounded top-20 min-w-full sm:min-w-[70%] ${
          showFeatList ? "block " : "hidden"
        } `}
      >
        <ul className="list sm:flex">
          <li className="li1 text-center w-full mr-6 whitespace-nowrap border-b-2 border-white text-white sm:text-black">
            <Button
              // noShowBtn
              noStyle
              btnName="About Me"
              testId="login"
              onClick={handleLogin}
            />
          </li>
          <li className="li1 text-center w-full mr-6 border-b-2 border-white text-white sm:text-black">
            <Button
              noShowBtn
              noStyle
              btnName="Crypto"
              testId="Crypto"
              onClick={handleCrypto}
            />
          </li>
          <li className="li1 text-center w-full mr-6 border-b-2 border-white text-white sm:text-black">
            <Button
              noShowBtn
              noStyle
              btnName="LQA"
              testId="qa"
              onClick={handleLQA}
            />
          </li>
          <li className="li1 text-center w-full sm:mr-6 btn border-b-2 border-white text-white sm:text-black">
            <Button
              noShowBtn
              noStyle
              btnName="Home"
              testId="home"
              onClick={handleHome}
            />
          </li>
          <li className="li1 text-center w-full mr-6 btn text-white sm:text-black">
            <Button
              noShowBtn
              noStyle
              btnName="LogIn"
              testId="login"
              onClick={handleLogin}
            />
          </li>
          <li className="li1 w-full mr-6 hidden sm:block">
            <Button
              btnName="SignUp"
              testId="signUp"
              onClick={handleNewSignIn}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

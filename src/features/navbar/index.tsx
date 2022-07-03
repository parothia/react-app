import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import logo from "../../images/tlogo.png";
import { LoginReducerState } from "../store/featureSlice";
import * as Actions from "../store/featureSlice";
import Login from "../Login";
import NewUser from "../NewUser";

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
  };

  const handleNewSignIn = () => {
    dispatch(Actions.setNewLogin(isNewLogin));
  };

  const handleCrypto = () => {
    navigate("/crypto");
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="navbar flex justify-between items-center mb-4">
      {isLogin && <Login />}
      {isNewLogin && <NewUser />}
      <div className="left-bar">
        <img
          src={logo}
          alt="logo"
          onClick={handleHome}
          className="logo h-24 -mt-4 hover:cursor-pointer"
        />
      </div>
      <div className="right-bar"></div>
      <ul className="list flex">
        <li className="li1 mr-12">
          <Button
            noShowBtn
            btnName="About Me"
            testId="login"
            onClick={handleLogin}
          />
        </li>
        <li className="li1 mr-12">
          <Button
            noShowBtn
            btnName="Crypto"
            testId="Crypto"
            onClick={handleCrypto}
          />
        </li>
        <li className="li1 mr-12 btn">
          <Button
            noShowBtn
            btnName="Site 2"
            testId="login"
            onClick={handleLogin}
          />
        </li>
        <li className="li1 mr-12 btn">
          <Button
            noShowBtn
            btnName="LogIn"
            testId="login"
            onClick={handleLogin}
          />
        </li>
        <li className="li1 mr-12">
          <Button btnName="SignUp" testId="signUp" onClick={handleNewSignIn} />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

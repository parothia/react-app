// import { LoginInitialState } from './featureSlice';
import { combineReducers, createSlice } from "@reduxjs/toolkit";

//not used
const loginState = false;
const newLoginState = false;
export interface LoginState {
  login: boolean;
  newLogin: boolean;
}
export interface LoginReducerState {
  loginReducer: LoginState;
}
// const initialState: LoginIntialState = { login: false, newLogin: false };
const loginSlice = createSlice({
  name: "login",
  initialState: { login: false, newLogin: false },
  reducers: {
    setLogin: (state, action) => {
      state["login"] = !state.login;
    },
    setNewLogin: (state, action) => {
      state["newLogin"] = !state.newLogin;
    },
  },
});

export const { setLogin, setNewLogin } = loginSlice.actions;
export default loginSlice.reducer;

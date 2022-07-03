import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./featureSlice";
import newLoginReducer from "./featureSlice";

const store = configureStore({
  reducer: {
    loginReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import RootReducer from "../Reducer/RootReducer";

const store = configureStore({
  reducer: RootReducer,
  middleware: [thunkMiddleware]
});

export default store;
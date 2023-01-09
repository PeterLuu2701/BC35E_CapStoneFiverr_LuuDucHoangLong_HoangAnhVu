import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../configStore";
import axios from "axios";
import {
  http,
  getStoreJson,
  setCookie,
  setStoreJson,
  ACCESS_TOKEN,
  USER_LOGIN,
} from "../../utils/config";

export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
}

export interface UserType {
  newUser: UserModel[];
}

const initialState:UserType = {
  newUser: [],
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    registerAction: (
        state:UserType, 
        action: PayloadAction<UserModel[]>) => {
      state.newUser = action.payload;
    },
  },
});

export const { registerAction } =
  userReducer.actions;

export default userReducer.reducer;

export const registerApi = (newUserData:any) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.post("/api/auth/signup", newUserData);
      console.log(result);

      if (result?.status === 200) {
        const action = registerAction(result.data.content);
        dispatch(action);
        window.confirm("Successful register!");
        window.location.href = "/login";
      }
    } catch (error: any) {
      console.log(error);
      if (error.response?.status === 400) {
        window.confirm("Email is already existed!");
      }
    }
  };
};
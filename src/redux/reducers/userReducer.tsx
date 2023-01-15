//rxslice
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
import { UserRegister } from "../../pages/register/Register";

//Register dùng chung với Profile
export interface UserProfile {
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

export interface UserLogin {
  email: string,
  accessToken: string
}

type UserState = {
  userRegister: UserProfile | null;
  userLogin: UserLogin | null;
  userProfile: UserProfile | null;
};

const initialState:UserState = {
  userRegister: null,
  userLogin: getStoreJson(USER_LOGIN),
  userProfile: null
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    registerAction: (state: UserState, action: PayloadAction<UserProfile>) => {
      state.userRegister = action.payload;
    },
    loginAction: (state: UserState, action: PayloadAction<UserLogin>) => {
      state.userLogin = action.payload;
    },
  },
});

export const { registerAction, loginAction } = userReducer.actions;

export default userReducer.reducer;

export const registerApi = (newUserData: UserRegister) => {
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

export const loginApi = (userLogin: UserLogin) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.post("/api/auth/signin", userLogin);
      const action = loginAction(result.data.content);
      console.log(result);
      dispatch(action);

      setStoreJson(USER_LOGIN, result.data.content);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 3);

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
};
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
import { Action } from "@remix-run/router";

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
  email: string;
  accessToken: string;
  password: string;
}

type UserState = {
  userRegister: UserProfile | null;
  userLogin: UserLogin | null;
  userProfile: UserProfile | null;
};

const initialState: UserState = {
  userRegister: null,
  userLogin: getStoreJson(USER_LOGIN),
  userProfile: null,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    registerAction: (state: UserState, action: PayloadAction<UserProfile>) => {
      state.userRegister = action.payload;
    },
    loginAction: (state: UserState, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
      // window.location.href = "/";
    },
    getProfileAction: (
      state: UserState,
      action: PayloadAction<UserProfile>
    ) => {
      state.userProfile = action.payload;
    },
    updateProfileAction: (
      state: UserState,
      action: PayloadAction<UserProfile>
    ) => {
      state.userProfile= action.payload;
    }
  },
});

export const { registerAction, loginAction, getProfileAction, updateProfileAction } =
  userReducer.actions;

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
      const action = loginAction(result.data.content.user);
      if (result.status === 200) {
        console.log("login", result.data.content.user);
        dispatch(action);

        setStoreJson(USER_LOGIN, result.data.content);
        setCookie(ACCESS_TOKEN, result.data.content.accessToken, 3);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProfileApi = (id: number) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.get(`/api/users/${id}`);
      const action = getProfileAction(result.data.content);
      console.log("get");

      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProfileApi = (id: number) => {
  return async (dispatch: DispatchType) => {
    try {
      const result = await http.put(`/api/users/${id}`);
      const action = updateProfileAction(result.data.content);
      console.log("update: ", result);

      dispatch(action);      
    } catch (error) {
      console.log(error);
    }
  }
}
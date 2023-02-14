import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../utils/config";
import { DispatchType } from '../configStore';
import { history } from '../../index';

export interface Admin{
    
    id:               string;
    name:             string;
    email:            string;
    phone:            string;
    password:         string;
    birthday:         string;
    role:             string;
    certification:    string;
    gender:          boolean;
    skill:            string;

}
export interface EditUser {
  id: string;
  value: Admin;
}

const initialState:any =  {
    arrAdmin:[],
    editUser:{}
}

const adminReducer = createSlice({
  name: 'adminReducer',
  initialState,
  reducers: {
    getAdminAction:(state,action:PayloadAction<Admin[]>)=>{
        state.arrAdmin=action.payload;
    },
    getUpdateAction:(state,action:PayloadAction<Admin>)=>{
        state.editUser=action.payload;
    },
    searchUserAction:(state,action:PayloadAction<Admin[]>)=>{
        state.arrAdmin=action.payload;
  }
  }
});

export const {getAdminAction,getUpdateAction,searchUserAction} = adminReducer.actions

export default adminReducer.reducer


/* ------------ action api -------------------- */
export const getadmintApi = () => {
  return async (dispatch1: DispatchType) => {
    // console.log(getState())
    try {
      const result = await http.get('/api/users');
      let arradmin:Admin[]=result.data.content;
      const action = getAdminAction(arradmin);
      
      dispatch1(action);
     
    } catch (err) {
      console.log({ err });
    }
  };
};

export const deleteUseApi=(id: string)=>{
return async(dispatch:DispatchType)=>{
  try{
    const result=await http.delete(`/api/users?id=${id}`);
    console.log(result.data.message)
    dispatch(getadmintApi());
}
catch(err){
    console.log(err)
    alert('xoa khong thanh cong')
}

}
}

export const addAdminApi = (values:string) => {
return async (dispatch1: DispatchType) => {
  // console.log(getState())
  try {
    const result = await http.post('/api/users',values);
    alert('them admin thanh cong');
    dispatch1(getadmintApi());
    history.push('/admin/user')
  } catch (err) {
    console.log({ err });
  }
};
};

export const editUserApi=(id:any)=>{
return async (dispatch2: DispatchType) => {
  try {
    let result = await http.get(`/api/users/${id}`);
    dispatch2(getUpdateAction(result.data.content));
  } catch (err) {
    console.log(err);
  }
};
}



export const updatUsereApi=(data: EditUser) => {
return async (dispatch: DispatchType) => {
  try {
    const result = await http.put(`/api/users/${data.id}`, data.value);
    // customHistory.push('/admin/management-user');
    dispatch(addAdminApi(result.data.content));
    alert('update admin thanh cong');
  } catch (error) {
    console.log(error);
  }
};
};

export const searchUserApi = (name: any) => {
return async (dispatch: DispatchType) => {
  try {
    const result = await http.get(`/api/users/search/${name}`);
    let seach:Admin[]=result.data.content;
    // console.log(seach)
    const action=searchUserAction(seach)
    dispatch(action);
    console.log(action)
  } catch (error) {
    console.log(error);
  }
};
};
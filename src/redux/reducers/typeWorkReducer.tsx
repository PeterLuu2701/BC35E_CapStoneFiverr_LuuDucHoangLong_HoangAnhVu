import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../utils/config';
import { DispatchType } from '../configStore';

export interface TypeWork{
    id: number ,
    tenNhom: string,
    hinhAnh: string,
    maLoaiCongviec: string,
    dsChiTietLoai:{}

}
const initialState:any = {
    arrTypeWork:[],
    editTypeWork:{}
}

const typeWorkReducer = createSlice({
  name: 'typeWorkReducer',
  initialState,
  reducers: {
    getTypeWorkAction:(state,action:PayloadAction<TypeWork[]>)=>{
        state.arrTypeWork=action.payload;
    },
    getEditTypeWorkAction:(state,action:PayloadAction<TypeWork>)=>{
      state.editTypeWork=action.payload;
  },
    searchTypeWorkAction:(state,action:PayloadAction<TypeWork[]>)=>{
    state.arrTypeWork=action.payload;
}
  }
});

export const {getTypeWorkAction, getEditTypeWorkAction, searchTypeWorkAction} = typeWorkReducer.actions

export default typeWorkReducer.reducer
/* ------------ action api -------------------- */

export const getTypeWorkApi = () => {
    return async (dispatch: DispatchType) => {
      // console.log(getState())
      try {
        const result = await http.get('/api/chi-tiet-loai-cong-viec');
        let arrTypeWork:TypeWork[]=result.data.content;
        const action = getTypeWorkAction(arrTypeWork);
        
        dispatch(action);
       
      } catch (err) {
        console.log({ err });
      }
    };
  }
  export const addServiceApi = (values:string) => {
    return async (dispatch: DispatchType) => {
      // console.log(getState())
      try {
        const result = await http.post('/api/chi-tiet-loai-cong-viec',values);
        alert('them cong viec thanh cong');
        dispatch(getTypeWorkApi());
      } catch (err) {
        console.log({ err });
      }
    };
  };
  export const deletTypeWorkApi=(id: number)=>{
    return async(dispatch:DispatchType)=>{
      try{
        const result=await http.delete(`/api/chi-tiet-loai-cong-viec/${id}`);
        console.log(result.data.message)
        dispatch(getTypeWorkApi());
      }
      catch(err){
          console.log(err)
          alert('xoa khong thanh cong')
      }
  }
  };

  export const editServiceApi=(id:string)=>{
    return async (dispatch: DispatchType) => {
      try {
        let result = await http.get(`/api/chi-tiet-loai-cong-viec/${id}`);
        console.log(result.data.content);
        dispatch(getEditTypeWorkAction(result.data.content));
      } catch (err) {
        console.log(err);
      }
    };
  }
  export const updateServiceApi=(data: any) => {
    return async (dispatch: DispatchType) => {
      try {
        const result = await http.post('/api/chi-tiet-loai-cong-viec', data);
        // customHistory.push('/admin/management-user');
        dispatch(getTypeWorkApi());
        console.log(result.data.content)
        alert('update admin thanh cong');
      } catch (error) {
        console.log(error);
      }
    };
  };
  export const searchTypeWorkApi = (Keywork: any) => {
    return async (dispatch: DispatchType) => {
      try {
        const result = await http.get(`/api/chi-tiet-loai-cong-viec/phan-trang-tim-kiem?keyword=${Keywork}`);
        let seach:TypeWork[]=result.data.content;
        // console.log(seach)
        const action=searchTypeWorkAction(seach)
        dispatch(action);
        console.log(action)
      } catch (error) {
        console.log(error);
      }
    };
  };
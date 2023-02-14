import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../utils/config';
import { DispatchType } from '../configStore';

export interface Service{
    id: number ,
    maCongViec: number,
    maNguoiThue: number,
    ngayThue: Date,
    hoanThanh: boolean
}
export interface ServiceModel{
  id?: number ,
  maCongViec: number,
  maNguoiThue: number,
  ngayThue: Date,
  hoanThanh: boolean
}
export interface EditService {
  id: string;
  value: Service;
}

const initialState:any = {
    arrService:[],
    editService:{}
}

const serviceReducer = createSlice({
  name: 'serviceReducer',
  initialState,
  reducers: {
    getServiceAction: (state,action:PayloadAction<Service[]>)=>{
        state.arrService=action.payload
    },
    getEditServiceAction:(state,action:PayloadAction<Service[]>)=>{
        state.editService=action.payload
    },
    searchServiceAction:(state,action:PayloadAction<Service[]>)=>{
        state.arrService=action.payload
    }
  }
});

export const { getServiceAction, getEditServiceAction, searchServiceAction} = serviceReducer.actions

export default serviceReducer.reducer

/* ------------ action api -------------------- */

// nhận Api service
export const getServiceApi =()=>{
    return async (dispatch:DispatchType)=>{
        try{
            const result = await http.get('/api/thue-cong-viec')
            let arradmin:Service[]=result.data.content
            const action = getServiceAction(arradmin)
            dispatch(action)
        } catch(err){
            console.log(err);
            
        }
    }
}

// thêm api service
export const addServiceApi = (values:Service) => {
    return async (dispatch: DispatchType) => {
      // console.log(getState())
      try {
        const result = await http.post('/api/thue-cong-viec',values);
        alert('them cong viec thanh cong');
        dispatch(getServiceApi());
      } catch (err) {
        console.log({ err });
      }
    };
  };

//   sửa api service
  export const editServiceApi=(id:any)=>{
    return async (dispatch: DispatchType) => {
      try {
        let result = await http.get(`/api/thue-cong-viec/${id}`);
        console.log(result.data.content);
        dispatch(getEditServiceAction(result.data.content));
      } catch (err) {
        console.log(err);
      }
    };
  }

//   cập nhật
export const updateServiceApi=(data: ServiceModel) => {
    return async (dispatch: DispatchType) => {
      try {
        const result = await http.put(`/api/thue-cong-viec`, data);
        // customHistory.push('/admin/management-user');
        dispatch(getServiceApi());
        console.log(result.data.content)
        alert('update Service thanh cong');
      } catch (error) {
        console.log(error);
      }
    };
  };

//   xoá
export const deleteServiceApi=(id: number)=>{
    return async(dispatch:DispatchType)=>{
      try{
        const result=await http.delete(`/api/thue-cong-viec/${id}`);
        console.log(result.data.message)
        dispatch(getServiceApi());
      }
      catch(err){
          console.log(err)
          alert('xoa khong thanh cong')
      }
  }
};

// tìm kiếm

export const searcServiceApi = (Keywork: any) => {
    return async (dispatch: DispatchType) => {
      try {
        const result = await http.get('/api/thue-cong-viec/phan-trang-tim-kiem?pageIndex=1&pageSize=5');
        let seach:Service[]=result.data.content;
        // console.log(seach)
        const action=searchServiceAction(seach)
        dispatch(action);
        console.log(action)
      } catch (error) {
        console.log(error);
      }
    };
  };
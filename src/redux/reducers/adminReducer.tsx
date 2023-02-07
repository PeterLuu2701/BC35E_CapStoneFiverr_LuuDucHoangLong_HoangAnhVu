import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../utils/config';
import { DispatchType } from '../configStore';
import { ThongTinNguoiDung } from '../model/AuthModel';
import { CongViecViewModel } from '../model/JobModel';

const initialState: any = {
    allUser: [],
    allServiceHire: [],
    allCongViec: [],
    allJobType: [],
    user: {
        id: "",
        email: "",
        name: "",
        phone: "",
        birthday: "",
        role: "",
        certification: [],
        skill: [],
        gender: false,
    },
}

const adminReducer = createSlice({
    name: "adminReducer",
    initialState,
    reducers: {
        getAllUser: (state, action) => {
            state.allUser = action.payload
        },
        getAllCongViecAction: (
            state,
            action: PayloadAction<CongViecViewModel[]>
          ) => {
            state.allCongViec = action.payload;
          },
          getAllServiceHire: (state, action) => {
            state.allServiceHire = action.payload;
          },
          getAllJobType: (state, action) => {
            state.allJobType = action.payload;
          },
          getUserAction: (state, action) => {
            state.user = action.payload;
          },
          getUserSearch: (state, aciton) => {
            state.allUser = aciton.payload;
          },
    }
});

export const { 
    getAllUser,
    getAllCongViecAction,
    getAllServiceHire,
    getAllJobType,
    getUserAction,
    getUserSearch
} = adminReducer.actions

export default adminReducer.reducer

// ---------action async-------------

export const getUserApi = () => {
    return async (dispatch: DispatchType) => {
      try {
        const result = await http.get(`/users`);
        let allUser: ThongTinNguoiDung = result.data.content;
        dispatch(getAllUser(allUser));
      } catch (err) {
        console.log(err);
      }
    };
  };


//rxslice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../utils/config";
import { DispatchType } from "../configStore";

export interface MenuJob {
  id: number;
  tenLoaiCongViec: string;
  dsNhomChiTietLoai: DsNhomChiTietLoai[];
}

export interface DsNhomChiTietLoai {
  id: number;
  tenNhom: string;
  hinhAnh: string;
  maLoaiCongviec: number;
  dsChiTietLoai: DsChiTietLoai[];
}

export interface DsChiTietLoai {
  id: number;
  tenChiTiet: string;
}

export interface JobTypeMenu {
  arrJobTypeMenu: MenuJob[];
}

export interface CategoryJob {
  arrCategoryJob: DsNhomChiTietLoai[];
}

const initialState: any = {
  arrJobTypeMenu: []
};

const jobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getMenuJobAction: (
      state: JobTypeMenu,
      action: PayloadAction<MenuJob[]>
    ) => {
      state.arrJobTypeMenu = action.payload;
    },
    getCategoryAction: (
      state: CategoryJob,
      action: PayloadAction<DsNhomChiTietLoai[]>
    ) => {
      state.arrCategoryJob = action.payload;
    },
  },
});

export const { getMenuJobAction, getCategoryAction } = jobReducer.actions;

export default jobReducer.reducer;

// ---------- action async

export const getMenuJobApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get("/api/cong-viec/lay-menu-loai-cong-viec");
    const action: PayloadAction<MenuJob[]> = getMenuJobAction(
      result.data.content
    );
    dispatch(action);
  };
};

export const getCateogryApi = () => {
  return async (dispatch: DispatchType) => {
    const result = await http.get(
      `/api/cong-viec/lay-chi-tiet-loai-cong-viec/{MaLoaiCongViec}`);
      const action: PayloadAction<DsNhomChiTietLoai[]> = getCategoryAction(result.data.content);
      dispatch(action);
  }
}

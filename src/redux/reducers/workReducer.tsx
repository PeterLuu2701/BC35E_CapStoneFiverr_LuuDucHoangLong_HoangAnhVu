import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../utils/config';
import { DispatchType } from '../configStore';


export interface Work {
    id: number,
    tenCongViec: string,
    giaTien: number,
    danhGia: number,
    hoanThanh: boolean
}
const initialState: any = {
    arrWork: [],
    editWork: {}
}

const workReducer = createSlice({
    name: 'workReducer',
    initialState,
    reducers: {
        getWorkAction: (state, action: PayloadAction<Work[]>) => {
            state.arrWork = action.payload
        },
        getEditWorkAction: (state, action: PayloadAction<Work>) => {
            state.editWork = action.payload;
        },
        searchWorkAction: (state, action: PayloadAction<Work[]>) => {
            state.arrService = action.payload;
        }
    }
});


export const { getWorkAction, getEditWorkAction, searchWorkAction} = workReducer.actions

export default workReducer.reducer


/**------------ action api------------------- */
// nhận api công việc
export const getWorkApi = ()=>{
    return async (dispatch: DispatchType)=>{
        try{
            const result = await http.get('/api/cong-viec')
            let listWork:Work[]=result.data.content
            const action = getWorkAction(listWork)
            dispatch(action)
        } catch(err){
            console.log({err});
            
        }
    }
}

// thêm công việc
export const addWorkApi = (values:string) =>{
    return async (dispatch: DispatchType)=>{
        try {
            const result = await http.post('/api/cong-viec')
            alert('Thêm công việc thành công')
            dispatch(getWorkApi())
        } catch (err) {
            console.log({err});
            
        }
    }
}

// edit công việc
export const editWorkApi = (id:string) =>{
    return async (dispatch:DispatchType) => {
        try {
            let result = await http.get(`/api/cong-viec${id}`)
            console.log(result.data.content);
            dispatch(getEditWorkAction(result.data.content))

        } catch (err) {
            console.log({err});
            
        }
    }
}

// xóa
export const deleteWorkApi = (id:number) =>{
    return async (dispatch:DispatchType) => {
        try {
            let result = await http.get(`/api/cong-viec${id}`)
            console.log(result.data.message);
            dispatch(getWorkApi())
        } catch (err) {
            console.log({err});
            alert('xoá không thành công')
        }
    }
}

// tìm kiếm
export const searchWorkApi = (Keywork:any) =>{
    return async (dispatch:DispatchType) => {
        try {
            const result = await http.get('/api/cong-viec?keyword=${Keywork}')
            let search:Work[] = result.data.content
            const action = searchWorkAction(search)
            dispatch(action)
            console.log(action);
            
        } catch (err) {
            console.log({err});
            
        }
    }
}
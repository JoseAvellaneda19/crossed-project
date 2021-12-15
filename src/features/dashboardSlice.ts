import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from '.././app/constants'
import axios, { AxiosError } from 'axios'
import { RootState } from '../app/store'

const namespace = 'dashboard'

export const fetchDashboardData = createAsyncThunk(
  `${namespace}/fetchDashboardData`,
  async(_, {rejectWithValue}) =>{
  try{
    const { data } = await axios.get(`${API_URL}/dashboard`)
    return data
  }catch(err: any){
    let error: AxiosError<ValidationErrors> = err
    return rejectWithValue(error.message)
  }
}
)



interface ValidationErrors{
  errorMessage: string, 
  field_error: Record<string, string>
}
export interface DashboardData{
  id: string;
  name: string;
  Locale: string;   
  Amount: string;
}

export interface DashboardState{
  loading:string | null;
  data: DashboardData[];
  errorMessage?: string | null
}


const initialState: DashboardState = {
  loading: null,
  data: [],
  errorMessage: null
}

const dashboardSlice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchDashboardData.pending,(state) => {
      state.loading = HTTP_STATUS.PENDING
    })
    .addCase(fetchDashboardData.fulfilled, (state, action: PayloadAction<DashboardData[]>) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.data = action.payload
    })
    .addCase(fetchDashboardData.rejected, (state, {error}) => {
      state.loading = HTTP_STATUS.REJECTED
      state.errorMessage = error.message
    })
  }
})   

export const dashboardDataSelector = ((state: RootState) => state.dashboard.data )
export const dashboardLoadingSelector = ((state: RootState) => state.dashboard.loading)
export const dashboardErrorMessageSelector = ((state: RootState) => state.dashboard.errorMessage);

export default dashboardSlice.reducer


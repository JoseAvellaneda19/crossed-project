import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from '.././app/constants'
import axios, { AxiosError } from 'axios'
import { RootState } from '../app/store'

const namespace = 'users'

export const fetchUsersData = createAsyncThunk(
  `${namespace}/fetchDashboardData`,
  async (_, { rejectWithValue }) => {
    try{
      const { data } = await axios.get(`${API_URL}/users`)
      return data
    }catch(err: any){
      let error:AxiosError<ValidationErrors> = err
      return rejectWithValue(error.message)
    }
  }
)


interface ValidationErrors{
  errorMessage: string,
  field_error: Record<string, string>
}

export interface UserData{
  id: string;
  name: string;
  Locale: string;
  Amount: string;
  email: string
}

export interface UserState{
  loading:string | null;
  data: UserData[];
  entities?: Record<string, UserData>,
  errorMessage?: string | null
}


const initialState: UserState = {
  loading: null,
  data: [],
  errorMessage: null
}

const usersSlice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsersData.pending, (state) => {
      state.loading = HTTP_STATUS.PENDING
    })
    .addCase(fetchUsersData.fulfilled, (state, action: PayloadAction<UserData[]>) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.data = action.payload
    })
    .addCase(fetchUsersData.rejected,(state, {error}) => {
      state.loading = HTTP_STATUS.REJECTED
      state.errorMessage = error.message
    })
  }
})

export const usersDataSelector = ((state: RootState) => state.user.data )
export const usersLoadingSelector = ((state: RootState) => state.user.loading )
export const usersErrorMessageSelector = ((state: RootState) => state.dashboard.errorMessage)

export default usersSlice.reducer

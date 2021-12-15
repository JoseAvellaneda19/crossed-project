import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface DefaultState {
  selected: string;
  payload?: string
}

const initialState: DefaultState ={
  selected: ''
}


const appSideNavSlice = createSlice({
  name: 'appSideNav',
  initialState: initialState,
  reducers: {
    changeSelectedTab(state, action: PayloadAction<string>) {
      state.selected = action.payload
    },
  },
})

export const { changeSelectedTab } = appSideNavSlice.actions

export const appSideNavSelector = ({ appSideNav }: RootState) => appSideNav.selected;

export default appSideNavSlice.reducer

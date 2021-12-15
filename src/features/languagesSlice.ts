import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface LangState{
    language: string
}

interface SetLanguageAction {
    type: string
    payload: string;
}

export type LangAction = SetLanguageAction;

const initialState: LangState = {
    language: 'EN'
}


export const languageSlice = createSlice({
    name: "languages",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            
            state.language = action.payload
        }
    }
})


export const { setLanguage } = languageSlice.actions

export const languageSelector = (state: RootState) => state.language

export default languageSlice.reducer
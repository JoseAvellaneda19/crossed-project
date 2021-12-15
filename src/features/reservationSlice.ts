import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface ReservationState {
    value: string[]
}

const initialState: ReservationState = {
    value: []
}

export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const { addReservation, removeReservation } = reservationSlice.actions
export const reservationSelector = (state: RootState) => state.reservations.value

export default reservationSlice.reducer


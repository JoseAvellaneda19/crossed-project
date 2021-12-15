import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../features/reservationSlice'
import customerReducer from '../features/customerSlice';
import languageSlice from '../features/languagesSlice';
import appSideNavReducer from '../features/appSideNavSlice';
import dashboardReducer from '../features/dashboardSlice';
import usersReducer from '../features/usersSlice';
import { useDispatch } from 'react-redux'


export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        customer: customerReducer,
        language: languageSlice,
        appSideNav: appSideNavReducer,
        dashboard: dashboardReducer,
        user: usersReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()


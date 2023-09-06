import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import  ChangeInputSlice from './ChangeInputSlice';

const store = configureStore({
    reducer: {
        ChangeInputSlice,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
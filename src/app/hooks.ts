import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {rootStateType} from "../redux/types/weather";
import {AppDispatch} from "../redux/store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootStateType> = useSelector;
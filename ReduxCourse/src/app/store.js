import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoslice'

export const store = configureStore({
    reducer :todoReducer
})
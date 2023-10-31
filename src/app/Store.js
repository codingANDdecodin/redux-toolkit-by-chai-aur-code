import { configureStore } from "@reduxjs/toolkit";
import todoReducre from '../features/todo/TodoSlice'

export const store=configureStore({
     reducer:todoReducre
})
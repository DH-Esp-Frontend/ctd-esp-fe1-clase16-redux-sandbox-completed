import { configureStore } from "@reduxjs/toolkit";
import personajesReducer from "./Slices/personajesSlice";

const store = configureStore({
    reducer: personajesReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

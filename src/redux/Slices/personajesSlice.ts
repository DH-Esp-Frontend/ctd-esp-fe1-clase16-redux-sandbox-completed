import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface PersonajesState{
    busqueda: string;
}

const initialState: PersonajesState = {
    busqueda: '',
};


const personajeSlice = createSlice({
    name: "personajes",
    initialState,
    reducers: {
        buscarPersonajes: (state, action: PayloadAction<string>) =>{
            state.busqueda = action.payload
        }
    }
}) 

export const { buscarPersonajes } = personajeSlice.actions 

export default personajeSlice.reducer


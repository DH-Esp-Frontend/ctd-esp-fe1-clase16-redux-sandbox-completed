import { FC } from "react";
import { useAppDispatch } from "../redux/hooks";
import { buscarPersonajes } from "../redux/Slices/personajesSlice";

const Buscador: FC = () => {
    const dispatch = useAppDispatch();

    return <div className="App-table">
        <div>
            <label>Buscar por Nombre: </label>
            <input type="text" onChange={(e)=>  dispatch(buscarPersonajes(e.target.value))}
                   placeholder="Rick, Morty, etc" autoFocus={true}/>
        </div>
    </div>
}

export default Buscador;
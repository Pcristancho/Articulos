import { useContext } from "react";
import Lista from "../../lista/Lista";
import { Contexto } from "../../servicios/Memoria";


function Principal(){
    // const elContexto=useContext(Contexto)
    return(
        <>
            <h1>CONTENIDO PRINCIPAL</h1>
            <Lista></Lista>
        </>
    );
}
export default Principal;
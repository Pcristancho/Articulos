import { useContext } from "react";
import Lista from "../../lista/Lista";
import { Contexto } from "../../servicios/Memoria";
import TiendasOficiales from "../../lista/TiendasOficiales";
import { Outlet } from "react-router-dom";


function Principal(){
    // const elContexto=useContext(Contexto)
    return(
        <div className="mt-8"> 
            {/* <h1>CONTENIDO PRINCIPAL BASE</h1> */}
            {/* <Lista></Lista>
            <TiendasOficiales></TiendasOficiales> */}
            <Outlet></Outlet>
        </div>
    );
}
export default Principal;
import { useContext } from "react";
import { ContextoMarcas } from "../servicios/Memoria";
import estilosTiendas from './TiendasOficiales.module.css'
function TiendasOficiales(){
    const marcasTiendas=useContext(ContextoMarcas);

    return(
        <div>
            {/* <p>tiendas oficiales</p> */}
            <div className={estilosTiendas.contenedor}>
                {console.log(marcasTiendas)}
                {marcasTiendas.map((tienda)=>(
                    <div key={tienda.nombre} className={estilosTiendas.tienda}>
                        <a href={tienda.enlace} target='_blank'>
                            <div>
                                <img src={tienda.logo}></img>
                            </div>
                        </a>   
                    </div>
                ))}
            </div>
        </div>
    );
}
export default TiendasOficiales;
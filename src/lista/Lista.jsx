import { useContext } from "react";
import Articulo from "./Articulo";
import { Contexto } from "../servicios/Memoria";
import estilosLista from './Lista.module.css'

const ListaMock=[
    {
        "id":"1",
        "imgSrc":'./src/img/img1.png',
        "titulo":"Saco 1",
        "descripcion":"descripcion de saco 1",
        "precio":"14.900",
        "añoColeccion":"Nueva Colección"
    },
    // {
    //     "id":"2",
    //     "imgSrc":'./src/img/img2.png',
    //     "titulo":"Saco 2",
    //     "descripcion":"descripcion de saco 2",
    //     "precio":"14.900",
    //     "añoColeccion":"2007"
    // }
]
function Lista(){
    //const artic=ListaMock 
    const artic=useContext(Contexto);
    return(
        // <div className="grid grid-cols-4 ">
        <div className={estilosLista.responsiveList}>
            {/* <p>aqui va la lista</p>
            <p>{JSON.stringify(artic)}</p> */}
            {artic.map((articulo)=>(<Articulo {...articulo} key={articulo.id}></Articulo>))}
            
        </div>
    );
}
export default Lista;
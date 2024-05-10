import Articulo from "./Articulo";

const ListaMock=[
    {
        "id":"1",
        "imgSrc":'./src/img/img1.png',
        "titulo":"Saco 1",
        "descripcion":"descripcion de saco 1",
        "precio":"14.900",
        "añoColeccion":"Nueva Colección"
    },
    {
        "id":"2",
        "imgSrc":'./src/img/img2.png',
        "titulo":"Saco 2",
        "descripcion":"descripcion de saco 2",
        "precio":"14.900",
        "añoColeccion":"2007"
    }
]
function Lista(){
    const artic=ListaMock
    return(
        <div className="grid grid-cols-4 ">
            {/* <p>aqui va la lista</p>
            <p>{JSON.stringify(artic)}</p> */}
            {artic.map((articulo)=>(<Articulo {...articulo}></Articulo>))}
            
        </div>
    );
}
export default Lista;
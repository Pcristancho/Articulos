import { createContext } from "react"

export const Contexto=createContext(null);
// OJO LAS REFERENCIAS DE IMAGENS O ASI SE HACEN TENIENDO EN CUENTA REFERENCIA DESDE EL HTML no del componente
const ListaMock=[
    {
        "id":"1",
        "imgSrc":'./src/img/img1.png',
        "titulo":"Saco de Algodón University Club",
        "descripcion":{
            "tipo":"Sacos",
            "Genero":"Hombre",
            "Composicion":"Algodón"
        },
        "precio":"149.990",
        "añoColeccion":"Nueva Colección",
        "enlace":"https://www.falabella.com.co/falabella-co/product/882773332/Saco-para-Hombre-de-Algodon-Con-cremallera-University-Club/882773342"
    },
    {
        "id":"2",
        "imgSrc":'./src/img/img3.png',
        "titulo":"Buzo Capucha Manga Larga",
        "descripcion":{
            "tipo":"Buzo",
            "Genero":"Hombre",
            "Composicion":"Algodón"
        },
        "precio":"125.940",
        "añoColeccion":"2007",
        "enlace":"https://www.urbenmood.com/buzo-saco-capucha-manga-larga-hombre-ajustado-1131"
    },
    {
        "id":"3",
        "imgSrc":'./src/img/img4.png',
        "titulo":"Saco Artesanal Tejido",
        "descripcion":{
            "tipo":"Saco",
            "Genero":"Hombre",
            "Composicion":"Doble Hilo"
        },
        "precio":"22.900",
        "añoColeccion":"2010",
        "enlace":"https://ovejito.com/products/saco-artesanal-tejido-2"
    }
]
const estadoInicial={
    orden:[],
    objetos:{}
}
function Memoria({children}){
    return(
        <Contexto.Provider value={ListaMock}>
            {children}
        </Contexto.Provider>
    )
}
export default Memoria;
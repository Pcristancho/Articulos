import { createContext } from "react"

export const Contexto=createContext(null);
// OJO LAS REFERENCIAS DE IMAGENS O ASI SE HACEN TENIENDO EN CUENTA REFERENCIA DESDE EL HTML no del componente
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

const estadoInicial={
    orden:[],
    objetos:{}
}
import estilosArticulo from './Articulo.module.css'
function Articulo({...articuloMock}){
    const articulo={...articuloMock};
    let descripcion=articulo.descripcion
    // descripcion=JSON.parse(descripcion);
    const tipo=descripcion.tipo;
    const Genero=descripcion.Genero;
    const Composicion=descripcion.Composicion;
    const vectorDescripcion=[tipo,Genero,Composicion];

    // descripcion=JSON.stringify(descripcion)
    return(
        <div className={estilosArticulo.contenedor}>
            <a href={articulo.enlace} target='_blank'>
                {/* <p>AQUI VA EL ARTICULO</p> */}
                <div className={estilosArticulo.contenedorImg}>
                    <img className={estilosArticulo.img} src={articulo.imgSrc}></img>
                </div>
                <div className='text-sm'>   
                    <p>{articulo.titulo}</p>
                    <p>${articulo.precio}</p>
                    {vectorDescripcion.map((descrip,indice)=>(<span className={estilosArticulo.descripciones} key={indice}>{descrip}</span>))}
                    
                    <p>{articulo.añoColeccion}</p>
                </div>
            </a>
        </div>
    );
}
export default Articulo;
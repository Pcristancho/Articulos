import estilosArticulo from './Articulo.module.css'
function Articulo({...articuloMock}){
    const articulo={...articuloMock};
    return(
        <div className={estilosArticulo.contenedor}>
            {/* <p>AQUI VA EL ARTICULO</p> */}
            <div>
                <img className={estilosArticulo.img} src={articulo.imgSrc}></img>
            </div>
            <div>
                <p>{articulo.titulo}</p>
                <p>{articulo.descripcion}</p>
                <p>{articulo.precio}</p>
                <p>{articulo.añoColeccion}</p>
            </div>
            
        </div>
    );
}
export default Articulo;
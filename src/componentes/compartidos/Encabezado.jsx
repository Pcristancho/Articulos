// import { ReactComponent as Logo} from './../../img/pngegg.png' solo se puede usar react component con imagenes SVG
import { Link } from 'react-router-dom';
import estilosEncabezado from './Encabezado.module.css'

function Encabezado(){
    return(
        <div className={estilosEncabezado.ecabezado}>
            <div>
                {/* <p className="text-3xl font-bold underline bg-red-800">logo</p> */}
                {/* <img src="./src/img/pngegg.png" className="h-10" style={{height: 2.5+"rem"}} ></img> */}
                <img src="./src/img/pngegg.png" className="w-10" ></img>
            </div>
            <div className="flex justify-between">
                {/* <div className={estilosEncabezado.opcionesfiltro}><p>CLASIFICAR POR &#5167; </p></div> */}
                <div className={estilosEncabezado.opcionesfiltro}><Link to="/articulos">ARTICULOS</Link></div>
                <div className={estilosEncabezado.opcionesfiltro}><Link to="./tiendas">TIENDAS</Link></div>
                <div className={estilosEncabezado.opcionesfiltro}><Link to={".contacto"}>CONTACTO</Link></div>
                {/* <div className={estilosEncabezado.opcionesfiltro}><p>TIPO DE PRODUCTO &#5167;</p></div>
                <div className={estilosEncabezado.opcionesfiltro}><p>ESTILO &#5167;</p></div>
                <div className={estilosEncabezado.opcionesfiltro}><p>☰</p></div>
                <div className={estilosEncabezado.opcionesfiltro}><p>TODOS LOS FILTROS</p></div> */}
            </div>
            
            <nav>
                <p></p>
            </nav>
        </div>
    );
}
export default Encabezado;
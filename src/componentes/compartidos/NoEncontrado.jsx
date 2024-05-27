import { Link } from "react-router-dom";

function NoEncontrado(){
    return(
    <div>
      <h2>Ups 😅 hay un problema con tu pagina</h2>
      <h1>Estamos trabajando en reparalo 🛠</h1>
      <p>
        <Link to="/">Regresar</Link>
      </p>
    </div>
    );
}
export default NoEncontrado;
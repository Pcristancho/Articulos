const { Children } = require("react");

function Tarjeta({src,Children}){
    return(
        <>
        <div>
            <div>
                <img src={src}></img>
            </div>
            <div>
                {Children}
            </div>
        </div>
        </>
    );
}

export default Tarjeta;
import "./Formacion.css";
import noimage from "../../../assets/noimage.png";

function Formacion({ imagen = noimage, children }) {
    return (
    <div className="formacion">
        <img src={imagen} alt="Formación" />
        <div className="formacion__contenido">
            {children}
        </div>
    </div>
    );
}

export default Formacion;

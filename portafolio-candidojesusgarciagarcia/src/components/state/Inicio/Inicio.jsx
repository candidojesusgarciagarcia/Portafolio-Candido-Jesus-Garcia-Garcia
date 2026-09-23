import ImagenUsuario from "../../Image/ImagenUsuario/ImagenUsuario.jsx";
import Presentation from "../../Text/Presentation/Presentation.jsx";
import GetStarted from "../../Button/GetStarted/GetStarted.jsx";
import candido from "../../../assets/candidojesusgarciagarcia.avif";
import "./Inicio.css";

function Inicio({ onGetStarted, saliendo }) {
    return (
        <div className={`inicio ${saliendo ? "inicio--saliendo" : ""}`}>
            <ImagenUsuario src={candido} alt="Cándido Jesús García García" />
            <Presentation texto1="Mi nombre es " texto2="Cándido Jesús García García" texto3=" y soy desarrollador de software" />
            <GetStarted texto="Ver Portafolio" onClick={onGetStarted} />
        </div>
    );
}

export default Inicio;

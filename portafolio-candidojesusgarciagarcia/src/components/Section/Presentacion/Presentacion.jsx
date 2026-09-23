import "./Presentacion.css";
import Presentation from "../../Text/Presentation/Presentation";

function Presentacion({texto1, texto2, texto3}) {
    return (
        <div className="presentacion">
            <Presentation texto1={texto1} texto2={texto2} texto3={texto3} />
        </div>
    );
}

export default Presentacion;

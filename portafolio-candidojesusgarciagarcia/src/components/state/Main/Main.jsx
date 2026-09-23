import Formacion from "../../Section/Formacion/Formacion";
import "./Main.css";
import iescastelar from "../../../assets/iescastelar.avif";
import iesalbarregas from "../../../assets/iesalbarregas.avif";
import { Space } from "lucide-react";

function Main() {
    return (
        <div className="main">
            {
            <>
                    
                    <Formacion imagen={iescastelar}>
                        <h2>IES CASTELAR (GRADO BÁSICO) 2020 - 2021 BADAJOZ</h2>
                        <p>Grado basico Montaje y Mantenimiento de Equipos Informáticos</p>
                        <ul>
                            <li>Montaje de equipos informáticos</li>
                            <li>Mantenimiento de equipos informáticos</li>
                            <li>Reparación de equipos informáticos</li>
                        </ul>
                        <ul>
                            <li>Instalación de software</li>
                            <li>Optimizacion básica de sistemas</li>
                            <li>Personalizacion de sistemas</li>
                        </ul>
                        <ul>
                            <li>Diseño de presupuestos para empresas y particulares</li>
                        </ul>
                    </Formacion>
                    
                    <Formacion imagen={iescastelar}>
                        <h2>IES CASTELAR (GRADO MEDIO) 2022 - 2023 BADAJOZ</h2>
                        <p>Grado medio Sistemas Microinformáticos y Redes</p>
                        <ul>
                            <li>Creación de redes de comunicación entre dispositivos informáticos</li>
                            <li>Protocolos de comunicación entre dispositivos informáticos</li>
                            <li>Infraestructura de redes de área local</li>
                        </ul>
                        <ul>
                            <li>Manejo de aplicaciones ofimaticas como libreoffice y herramientas de google drive</li>
                            <li>Conocimientos básicos de edicion de imagenes utilizando la herramienta GIMP</li>
                            <li>Conocimientos básicos de edicion y montaje de videos</li>
                            <li>Capacidad de aprendizaje y adaptacion a nuevas aplicaciones y herramientas</li>
                        </ul>
                        <ul>
                            <li>Diseño básico de paginas web utilizando Joomla</li>
                            <li>Diseño básico de paginas web utilizando WordPress</li>
                            <li>Programación básica en Powershell y Shellscript</li>
                        </ul>
                    </Formacion></>
            }
            
        </div>
    );
}

export default Main;

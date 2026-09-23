import Formacion from "../../Section/Formacion/Formacion";
import iescastelar from "../../../assets/iescastelar.avif";
import iesalbarregas from "../../../assets/iesalbarregas.avif";
import cablex from "../../../assets/cablex.avif";
import fenles from "../../../assets/fenles.avif";
import Presentacion from "../../Section/Presentacion/Presentacion";
import Title from "../../Text/Title/Title";
import "./Main.css";

function Main() {
    return (
        <div className="main">
            {
                <>
                    <Presentacion texto1="Hola, soy " texto2="Candido Jesus Garcia Garcia" texto3=" y soy desarrollador de aplicaciones multiplataforma. ahora vas a ver mi formacion y experiencia laboral en practicas en diferentes empresas" />
                    <Title texto="Formación" />
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
                            <li>Diseño de presupuestos de equipos para empresas y particulares</li>
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
                    </Formacion>
                    <Formacion imagen={iesalbarregas}>
                        <h2>IES ALBARREGAS (GRADO SUPERIOR) 2025 - 2026 MERIDA</h2>
                        <p>Grado superior Desarrollo de Aplicaciones Multiplataforma</p>
                        <ul>
                            <li>Desarrollo de aplicaciones web utilizando tecnologías modernas</li>
                            <li>Uso de lenguajes de programación como Python, Java, Dart, Kotlin</li>
                        </ul>
                        <ul>
                            <li>Creación y mantenimiento de bases de datos sql y no sql</li>
                            <li>Desarrollo de aplicaciones móviles utilizando tecnologías modernas como Flutter y Kotlin</li>
                            <li>Desarrollo de aplicaciones de escritorio utilizando tecnologías modernas como Flutter y JavaFX</li>
                            <li>Desarrollo de aplicaciones web utilizando html css y Flutter</li>
                            <li>Desarrollo de APIs REST utilizando Java y Spring Boot y Python FastAPI</li>
                            <li>Desarrollo de Procesos separados para aprovechar todos los núcleos de procesamiento e hilos</li>
                        </ul>
                    </Formacion>
                    <Title texto="Experiencia laboral" />
                    <Formacion imagen={cablex}>
                        <h2>CABLEX "ACTUALMENTE AVATEL" </h2>
                        <p>Practicas en la empresa de telecomunicaciones Cablex 1 mes</p>
                        <ul>
                            <li>Instalacion de fibra óptica en zonas exteriores</li>
                            <li>Fusión empalme y control de calidad de fibra óptica</li>
                        </ul>
                        <ul>
                            <li>Instalacion de sistema electrico en interiores</li>
                        </ul>
                    </Formacion>
                    <Formacion imagen={cablex}>
                        <h2>CABLEX "ACTUALMENTE AVATEL" </h2>
                        <p>Practicas en la empresa de telecomunicaciones Cablex 3 meses</p>
                        <ul>
                            <li>Maquetación de páginas web basicas en wordpress</li>
                            <li>Maquetación de páginas web basicas en html y css</li>
                        </ul>
                        <ul>
                            <li>Diseño de interfaces para webs de la empresa</li>
                        </ul>
                    </Formacion>
                    <Formacion imagen={fenles}>
                        <h2>FENLES</h2>
                        <p>Practicas en la empresa de eventos Fenles 1 mes</p>
                        <ul>
                            <li>Desarrollo de aplicaciones web con tecnologías y frameworks como react</li>
                            <li>Desarrollo de APIs REST utilizando Strapi</li>
                            <li>Desarrollo de aplicaciones móviles utilizando Flutter y Dart</li>

                        </ul>
                        <ul>
                            <li>Diseño de imagenes para redes sociales de la empresa</li>
                            <li>Creacion de eventos para la empresa y sus clientes, utilizando herramientas como Strapi</li>
                        </ul>
                    </Formacion>
                    <Presentacion texto1="Este ha sido mi " texto2="portafolio" texto3=" Gracias por su atención y su interés" />
                </>
            }
        </div>
    );
}

export default Main;

import "./ImagenUsuario.css";

function ImagenUsuario({ src, alt = "Imagen sin título" }) {
    return (
        <>
            <img src={src} alt={alt} />
        </>
    );
}

export default ImagenUsuario;

import './GetStarted.css';

function GetStarted({ texto, onClick }) {
  return (
<button className="button" onClick={onClick}>
    <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">{texto}</span>
    </span>
</button>
  );
}

export default GetStarted;

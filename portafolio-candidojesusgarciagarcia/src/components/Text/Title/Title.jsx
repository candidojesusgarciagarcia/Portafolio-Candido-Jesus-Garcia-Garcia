import "./Title.css";

function Title({ texto }) {
  return (
    
    <div className="title">
      <h1 className="title-text">
        {texto}
      </h1>
    </div>
  );
}

export default Title;

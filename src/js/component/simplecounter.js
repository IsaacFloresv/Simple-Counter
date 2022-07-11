import React from "react";

function SimpleCounter(props) {
  return (
    <div className="Contenedor">
      <div className="calendar">
        <i className="bi bi-stopwatch"></i>
      </div>
      <div className="col">{props.horas}</div>
      <div className="col">{props.minutos}</div>
      <div className="col">{props.segundos}</div>
      <div className="col">{props.milisegundos}</div>
    </div>
  );
}

export default SimpleCounter;

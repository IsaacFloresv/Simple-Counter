import React from "react";

function SimpleCounter(props) {
  return (
    <div className="Contenedor">
      <div className="calendar">
        <i class="bi bi-stopwatch"></i>
      </div>
      <div>{props.horas}</div>
      <div>{props.minutos}</div>
      <div>{props.segundos}</div>
      <div>{props.milisegundos}</div>
    </div>
  );
}

export default SimpleCounter;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

function App() {

const[persona, setpersona] = useState( {
  nombre:"",
  primerApellido:"",
  segundoApellido:"",
});

const manejarFormulario = (event) => {
  const {name, value} = event.target;
  setpersona(prevPersona => ({
    ...prevPersona,
    [name]: value
  }))
}

const submit = (event) => {
  event.preventDeFault();
  console.log(persona); 
}



  return (
    <div className="App">
      <form onsubmit={submit}>
        <div>
          <label className="label" htmlFor="">Nombre:</label>
          <input className="input" type="text" value={persona.nombre} name="nombre" onChange={manejarFormulario} />
        </div>
        <div>
          <label className="label" htmlFor="">Primer Apellido:</label>
          <input className="input" type="text" value={persona.primerApellido} name="primerApellido" onChange={manejarFormulario} />
        </div>
        <div>
          <label className="label" htmlFor="">Segundo Apellido:</label>
          <input className="input" type="text" value={persona.segundoApellido} name="segundoApellido" onChange={manejarFormulario} />
        </div>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

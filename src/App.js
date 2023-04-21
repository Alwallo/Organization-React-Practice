import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarEstado = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div className="App">
      <Header></Header>
      {mostrarFormulario ? <Formulario></Formulario> : <></>}
      <MiOrg switch={cambiarEstado}></MiOrg>
    </div>
  );
}

export default App;

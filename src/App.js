import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.jsx';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';

function App() {

  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
]

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaborador, setColaborador] = useState([]);

  const cambiarEstado = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  const addColaborador = (colab) => {
    setColaborador([...colaborador, colab]);
  }

  return (
    <div className="App">
      <Header></Header>
      {mostrarFormulario ? <Formulario equipos={equipos.map( (equipo) => equipo.titulo)} 
      addColaborador={addColaborador}></Formulario> : <></>}
      <MiOrg switch={cambiarEstado}></MiOrg>
      {
        equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo}
        colaboradores={colaborador.filter(colaborador => colaborador.equipo === equipo.titulo)}/>)
      }
    </div>
  );
}

export default App;

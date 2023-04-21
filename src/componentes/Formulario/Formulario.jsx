import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaOpciones from '../ListaOpciones/ListaOpciones.jsx';
import Boton from '../Boton/Boton';
import { useState } from 'react';

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarClick = (evento) =>{
        evento.preventDefault();  //Evento que impide la recarga de la página al momento del submit
        let datos = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datos);
    }

    return <form className='formulario' onSubmit={manejarClick}>
        <h1 className='formulario--etiqueta'>Rellena el formulario para crear el colaborador.</h1>
        <CampoTexto 
            Titulo="Nombre" 
            Placeholder="Ingresar nombre" 
            required
            valor={nombre}
            actualizar={setNombre}>
        </CampoTexto>
        <CampoTexto 
            Titulo="Puesto" 
            Placeholder="Ingresar puesto" 
            required
            valor={puesto}
            actualizar={setPuesto}>
        </CampoTexto>
        <CampoTexto 
            Titulo="Foto" 
            Placeholder="Ingresar enlace de foto" 
            required
            valor={foto}
            actualizar={setFoto}>
        </CampoTexto>
        <ListaOpciones 
            Titulo="Equipo"
            valor={equipo}
            actualizar={setEquipo}
            equipos={props.equipos}>
        </ListaOpciones>
        <Boton Texto="Crear"></Boton>
    </form>
}

export default Formulario;


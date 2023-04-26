import Colaborador from '../Colaborador/Colaborador';
import './Equipo.css'

const Equipo = (props) => {

    const {titulo, colorPrimario, colorSecundario} = props.datos;
    const {colaboradores, removeColab, changeColor} = props;

    return <>
    { colaboradores.length > 0  && 
        <section className='equipo' style={ {backgroundColor: colorSecundario} }>
            <input type='color' onChange={(e) => {changeColor(e.target.value, titulo)}} className='inputColor'></input>
            <h1 style={ {borderColor: colorPrimario} }>{titulo}</h1>
            <div className='colaborador-info'>
                { colaboradores.map( (colaborador, index) => 
                <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} colorSecundario={colorSecundario} removeColab={removeColab}/>) }
            </div>
        </section>
    }
    </>
}

export default Equipo;
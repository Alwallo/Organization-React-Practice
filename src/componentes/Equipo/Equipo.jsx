import Colaborador from '../Colaborador/Colaborador';
import './Equipo.css'

const Equipo = (props) => {

    const {titulo, colorPrimario, colorSecundario} = props.datos;
    const {colaboradores} = props

    return <>
    { colaboradores.length > 0  && 
        <section className='equipo' style={ {backgroundColor: colorSecundario} }>
            <h1 style={ {borderColor: colorPrimario} }>{titulo}</h1>
            <div className='colaborador-info'>
                { colaboradores.map( (colaborador, index) => 
                <Colaborador datos={colaborador} key={index} color={colorPrimario}/>) }
            </div>
        </section>
    }
    </>
}

export default Equipo;
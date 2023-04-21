import './ListaOpciones.css'

const ListaOpciones = (props) => {

    const manejarCambio = (evento) => {
        props.actualizar(evento.target.value);
    }

    return <div className='contenedorOpc'>
        <label className='etiqueta'>Equipos</label>
        <select className='comboBox' 
            id='select' 
            value={props.valor} 
            onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden> Seleccionar Equipo </option>   
            { props.equipos.map((equipos, index) => <option key={index}>{equipos}</option>) }
        </select>
    </div>
}

export default ListaOpciones;
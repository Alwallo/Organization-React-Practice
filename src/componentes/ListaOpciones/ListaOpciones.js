import './ListaOpciones.css'

const ListaOpciones = (props) => {

    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "DevOps",
        "Nóvil",
        "Investigación y Gestión"
    ]

    const manejarCambio = (evento) => {
        props.actualizar(evento.target.value);
    }

    return <div className='contenedorOpc'>
        <label className='etiqueta'>Equipos</label>
        <select className='comboBox' 
            id='select' 
            value={props.valor} 
            onChange={manejarCambio}>
            <option 
                className='placeholderEquipo' 
                value="" 
                disabled defaultValue="" 
                hidden>
                    Seleccionar Equipo
            </option>   
            { equipos.map((equipos, index) =>
                <option key={index}>{equipos}</option>
            )}
        </select>
    </div>
}

export default ListaOpciones;
import './CampoTexto.css'

const CampoTexto = (props) => {

    const manejarCambio = (evento) => {
        props.actualizar(evento.target.value);
    }

    return <div className='contenedorCampo'>
        <label className='etiqueta'>{props.Titulo}</label>
        <input 
            placeholder={props.Placeholder} 
            type='text' 
            className='texto' 
            value={props.valor}
            required={props.required}
            onChange={manejarCambio}>
        </input>
    </div>
}

export default CampoTexto;
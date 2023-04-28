import './Colaborador.css'
import {AiFillCloseCircle} from "react-icons/ai";

const Colaborador = (props) => {

    const { id, nombre, foto, puesto } = props.datos;
    const { removeColab, colorPrimario } = props;

    return <div className='tarjetita' style={ {borderColor: colorPrimario} }>
        <AiFillCloseCircle className='eliminar' onClick={() => {removeColab(id)}}/>
        <img src={ foto } alt='' className='foto-colab'/>
        <h3>{ nombre }</h3>
        <h4>{ puesto }</h4>
    </div>
}

export default Colaborador;
import './Colaborador.css'
import {AiFillCloseCircle} from "react-icons/ai";

const Colaborador = (props) => {

    const { nombre, foto, puesto } = props.datos;
    const { removeColab, colorPrimario, colorSecundario } = props;

    return <div className='tarjetita' style={ {borderColor: colorPrimario} }>
        <AiFillCloseCircle className='eliminar' onClick={removeColab} style={ {backgroundColor: colorSecundario }}/>
        <img src={ foto } alt='' className='foto-colab'/>
        <h3>{ nombre }</h3>
        <h4>{ puesto }</h4>
    </div>
}

export default Colaborador;
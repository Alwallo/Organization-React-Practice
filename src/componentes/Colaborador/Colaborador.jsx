import './Colaborador.css'

const Colaborador = (props) => {

    const { nombre, foto, puesto } = props.datos

    return <div className='tarjetita' style={ {borderColor: props.color} }>
        <img src={ foto } alt='' className='foto-colab'/>
        <h3>{ nombre }</h3>
        <h4>{ puesto }</h4>
    </div>
}

export default Colaborador;
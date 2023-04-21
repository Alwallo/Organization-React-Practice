import './Equipo.css'

const Equipo = (props) => {

    const {titulo, colorPrimario, colorSecundario} = props.datos;

    return <section className='equipo' style={ {backgroundColor: colorSecundario} }>
        <h1 style={ {borderColor: colorPrimario} }> {titulo} </h1>
        <div></div>
    </section>

}

export default Equipo;
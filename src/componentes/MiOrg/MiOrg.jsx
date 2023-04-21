import './MiOrg.css'

const MiOrg = (props) => {
    return <section className='organizacion'>
        <h1 className='tituloOrg'>Mi Organización</h1>
        <img src="/img/boton-org.png" alt='botonOrg' className='añadirOrg' onClick={props.switch}/>
    </section>
}

export default MiOrg;
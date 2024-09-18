import React from 'react'
import { Link } from 'react-router-dom'
import ListadoTrabajo from './ListadoTrabajo'

const Inicio = () => {
  return (
    <div className='home'>
      <p>
        Hola soy <strong>Manuel Lira</strong> y soy desarrollador web en Mexico,
        y ofresco mis servicios de <strong>programacion y desarrollo</strong> en todo
        tipo de proyectos web.
      </p>

      <h3 className='title'>
        Te ayudo a crear tu sitio o aplicacion web, tener mas 
        visibilidad y relevancias en internet.<br/><br/>

        <Link to={"/contacto"}> <a>Contacta conmigo</a>.</Link>
      </h3>

      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollador web.</p>

        <ListadoTrabajo limite="2"/>
      </section>

    </div>
  )
}

export default Inicio

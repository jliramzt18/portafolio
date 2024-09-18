import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'

const ListadoTrabajo = ({limite}) => { 
  return (
    <div className="page">
      
      <section className='works'>
        {
          trabajos.slice(0,limite).map(trabajo => {            
            return ( // Asegúrate de retornar el JSX
              <article key={trabajo.id} className='work-item'>
                <div className='mask'>
                    <img src={"/images/"+trabajo.id+".png"} />
                </div>
                <h2> <Link to={ "/proyecto/"+trabajo.id}>{trabajo.nombre}</Link> </h2>
                <p>{trabajo.tecnologias}</p>
                <a href={trabajo.url} target="_blank" rel="noopener noreferrer">{trabajo.url}</a>
              </article>
            )
          })
        }
      </section>
     
    </div>
  )
}

export default ListadoTrabajo

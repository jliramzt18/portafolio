import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() =>{
        let protyecto = trabajos.filter(trabajos => trabajos.id === params.id);

        setProyecto(protyecto[0]);
    },[]);

  return (
    <div className='page page-work'>
        <div className='mask'>
            <img src={"/images/"+proyecto.id+".png"} />
        </div>
        <h1 className='heading'>{ proyecto.nombre } </h1>
        <p> {proyecto.tecnologias} </p>
        <p>{ proyecto.descripcion }</p>
        <a href={"http://"+proyecto.url} target='_blank' >Ir al proyecto </a>

    </div>
  )
}

export default Proyecto

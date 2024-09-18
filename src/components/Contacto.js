import React from 'react'

const Contacto = () => {
  return (
    <div className="page">
      <h2 className='heading'>Contacto</h2>

      <form className='contact' action='jliramzt18@gmail.com'>
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellidos' />
          <input type="text" placeholder='Email' />
          <textarea type="text" placeholder='Motivo de contacto' />
          <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Contacto

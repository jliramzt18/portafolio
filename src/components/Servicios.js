import React from 'react'

const Servicios = () => {
  return (
    <div className="page">
      <h1 className='heading'>Servicios</h1>
      <section className='services'>
          <article className='service'>
            <h2>Diseño web</h2>
            <p><i>Beneficio</i>: Estética moderna y alineada con tu identidad de marca.</p>
            <p><i>Descripción</i>: Crearé un diseño web visualmente atractivo que cautivará a tus visitantes y mejorará la experiencia del usuario.</p>
          </article>

          <article className='service'>
            <h2>Desarrollo web</h2>
            <p><i>Beneficio</i>: Soluciones personalizadas que cumplen con tus requisitos específicos.</p>
            <p><i>Descripción</i>: Desarrollo integral de tu sitio web, desde el diseño hasta la funcionalidad, asegurando un rendimiento y seguridad óptimos.</p>
          </article>

          <article className='service'>
            <h2>Posicionamiento web</h2>
            <p><i>Beneficio</i>: Aumento de la visibilidad y el tráfico web.</p>
            <p><i>Descripción</i>: Implementaré técnicas SEO para que tu sitio web se posicione mejor en los resultados de búsqueda de Google y atraiga más visitantes.</p>
          </article>
      </section>
    </div>
  )
}

export default Servicios

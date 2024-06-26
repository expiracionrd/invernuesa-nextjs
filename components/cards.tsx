export default function Cards(){
    return(
      <main>

{/* <!-- Container for demo purpose --> */}
<div className="container my-24 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section className="mb-32 text-center">
    <h2 className="mb-16 text-3xl font-bold">
      Entérate de nuestros <u className="text-primary dark:text-primary-400">beneficios</u> para ti.
    </h2>
    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 448 512" stroke-width="26"
            stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
          </svg>
        </div>
        <h5 className="mb-4 text-lg font-bold">Tiempo de entrega</h5>
        <p className="text-neutral-500 dark:text-neutral">
          En menos de 24 horas le entregamos su préstamo en su negocio. 
        </p>
      </div>

      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
          </svg>
        </div>
        <h5 className="mb-4 text-lg font-bold">Forma de cobro</h5>
        <p className="text-neutral-500 dark:text-neutral">
          ¡Quédese tranquilo! No perderá ni una venta. Cobramos directamente en su negocio.
        </p>
      </div>

      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-percent h-6 w-6" viewBox="0 0 16 16">
  <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
        </div>
        <h5 className="mb-4 text-lg font-bold">Tasa interés más baja</h5>
        <p className="text-neutral-500 dark:text-neutral">
          Descuento de 5 puntos en la tasa de interés luego de haber saldado 2 préstamos sin atrasos. 
          </p>
      </div>
    </div>
    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-card-checklist h-6 w-6" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
</svg>
        </div>
        <h5 className="mb-4 text-lg font-bold">Reenganche</h5>
        <p className="text-neutral-500 dark:text-neutral">
        Reengancha tu préstamo al pagar la mitad de las cuotas. 

        Con un buen manejo obtenga mayores montos, basado en su historial y responsabilidad con cuotas. 
        </p>
      </div>

      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-collection h-6 w-6" viewBox="0 0 16 16">
        <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z"/>
      </svg>
        </div>
        <h5 className="mb-4 text-lg font-bold">Plazos de pago</h5>
        <p className="text-neutral-500 dark:text-neutral">
          Modalidad de pago diario y semanal. Disfrute un reenganche en menos tiempo.
        </p>
      </div>

      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-check h-6 w-6" viewBox="0 0 16 16">
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
        <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
      </svg>
        </div>
        <h5 className="mb-4 text-lg font-bold">Asesor financiero</h5>
        <p className="text-neutral-500 dark:text-neutral">
          Si necesita orientación financiera estamos más que honorosos de poder contestar sus preguntas. ¡Totalmente gratis!
          </p>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>


      </main>
    )
}
import Image from 'next/image'

export default function Cards(){
    return(
      <main>

{/* <!-- Container for demo purpose --> */}
<div className="container my-24 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section className="mb-32 text-center">
    <h2 className="mb-16 text-3xl font-bold">
      Afíliate a un alido<u className="text-primary dark:text-primary-400"> como nosotros.</u>
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
        <h5 className="mb-4 text-lg font-bold">Cuotas</h5>
        <p className="text-neutral-500 dark:text-neutral">
          Los plazos de nuestros préstamos son diarios o semanales. Sumados un día de gracia para iniciar a pagar.
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
        <h5 className="mb-4 text-lg font-bold">Días de pagos</h5>
        <p className="text-neutral-500 dark:text-neutral">
          ¡Quédese tranquilo! No perderá ni una venta. Cobramos directamente en su negocio.
        </p>
      </div>

      <div className="mb-12 md:mb-0">
        <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" className="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
        </div>
        <h5 className="mb-4 text-lg font-bold">Desembolso cheque</h5>
        <p className="text-neutral-500 dark:text-neutral">
          Una vez llenada su solicitud de préstamo, en menos de un día tendrá en sus manos su dinero. Sin cobrar gastos legales tampoco de cierre.
        </p>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>
{/* <!-- Container for demo purpose --> */}


      </main>

    // <div className="grid p-12 justify-items-center grid-cols-3 gap-8" >
    //     <div className="max-w-36 text-center"><img src="./images/cards/calculadora.jpg" alt="" />No cobramos gastos legales, tampoco de cierre.</div>
    //     <div className="max-w-36 text-center"><img src="./images/cards/reloj.png" alt="" />En 24 horas recibe  su préstamo</div>
    //     <div className="max-w-36 text-center"><img src="./images/cards/dinero.png" alt="" />1 día de gracia para comenzar a pagar.</div>
    //     <div className="max-w-36 text-center"><img src="./images/cards/money-bag.png" alt="" />Reenganche a partir del 50% saldo de su préstamo</div>
    //     <div className="max-w-36 text-center"><img src="./images/cards/bussiness-man.png" alt="" />Asesoría financiera ¡gratis!</div>
    //     <div className="max-w-36 text-center"><img src="./images/cards/NEG.jpg" alt="" />Facilidad de pago en su negocio</div>
    //   </div>
    )
}
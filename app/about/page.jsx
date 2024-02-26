import Image from 'next/image'
import Head from 'next/head';
export default function About(){
    return(

            <main>
            
            <div className="px-20 grid grid-row-3 gap-12 items-center justify-center" >
                <div className="font-mono font-bold text-3xl tracking-wide text-center">HISTORIA</div>
                    <p className='text-justify'>Desde el año 2001 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, cum. Atque, impedit, nulla voluptatum minus ducimus dolorem voluptate delectus ipsa eveniet, officia sequi magni dolor facilis mollitia commodi sunt dolore?
                    Quibusdam odit ex facilis natus impedit, aspernatur reiciendis illo ipsum consequatur exercitationem nisi laboriosam maxime sint minima hic obcaecati velit iusto ea. Alias perferendis ea doloremque, aspernatur velit repellat tempora.
                    Voluptatum dolore temporibus et atque non. <br/>Consequuntur expedita, laboriosam rerum obcaecati perspiciatis cum. Perferendis aliquid porro, minus magnam ea vel ullam voluptates, quos illo ducimus blanditiis reprehenderit, doloribus nam maiores.
                    Eveniet non dolor expedita perspiciatis, recusandae placeat sint nostrum eum, atque obcaecati optio sequi nam mollitia, neque itaque temporibus aliquam ipsa. Molestiae itaque iure natus eum quibusdam impedit. Neque, aspernatur?
                    Doloremque repudiandae repellendus reiciendis porro, autem impedit iure eveniet quia explicabo hic suscipit temporibus quo quidem natus reprehenderit maxime adipisci minima. Eligendi, sit! Autem eius, blanditiis suscipit deleniti aperiam velit.
                    Fuga, explicabo nesciunt? Dolorem aperiam adipisci, natus rerum non nulla saepe atque numquam? Unde dolorum atque, maiores beatae laborum suscipit vitae pariatur, a aperiam, debitis quaerat eius esse exercitationem officiis.</p>
                
                <div className="font-mono font-bold text-3xl text-center">MISIÓN</div>
                    <p className='text-justify'>Proporcionar servicios de financiamiento competitivos a MiPyME y personas físicas de manera rápida, eficiente y efectiva, a través de un personal motivado y capaz.</p>
                
                <div className="font-mono font-bold text-3xl text-center">VISIÓN</div>
                    <p className='text-justify'>Posicionarnos a nivel nacional como una de las primeras opciones de financiamiento a la MiPyME, ofreciendo las mejores facilidades para el desarrollo de nuestros clientes y asociados.</p>
                

                    <div className="font-mono font-bold text-3xl text-center">VALORES</div>
    </div>

     <div className="w-full">
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12 justify-center">

          <div className="relative flex flex-col mt-4">
            <div className="px-20 py-5 flex-auto">
              <h6 className="text-xl mb-1 font-semibold text-center">Integridad</h6>
              <p className="mb-4 text-blueGray-500">
                Se traduce como honradez, honestidad, respeto, corrección, responsabilidad, control emocional,
             puntualidad, lealtad, pulcritud, disciplina, coherencia y firmeza en sus acciones.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-20 py-5 flex-auto">
              <h6 className="text-xl mb-1 font-semibold text-center" >
                Efectividad
              </h6>
              <p className="text-blueGray-500 mb-4">
                Es el equilibrio entre eficacia y eficiencia, es decir, se logra un resultado o un efecto orientado al
                &apos;qué&apos; y simultáneamente al hacerlo, se utilizan mejores prácticas y el mínimo de recursos posibles.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 mt-4">
            <div className="px-4 py-5 flex-auto">
              <h6 className="text-xl mb-1 font-semibold text-center">Sinergia</h6>
              <p className="mb-4 text-blueGray-500">
                Trabajo en equipo. Servimos y confiamos en el apoyo oportuno de nuestros compañeros.
                Actuamos en conjunto incrementando acciones y esfuerzos para mejores resultados.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0">
            <div className="px-4 py-5 flex-auto">
              <h6 className="text-xl mb-1 font-semibold text-center">Comunicación</h6>
              <p className="mb-4 text-blueGray-500">
                Somos precisos y concisos. Practicamos la escucha activa.
                Compartimos de forma efectiva la información dentro y fuera de la organización.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

            </main>

    );
}
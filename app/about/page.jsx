import Image from 'next/image'

export default function About(){
    return(
        <main>
            
            <img className='w-screen' src="./images/aboutme.png" alt="Sobre nosotros" />

            <div className="px-20 grid grid-row-3 gap-12">
                <div className="font-mono font-bold text-3xl tracking-wide text-center">HISTORIA</div>
                    <p className='text-justify'>Desde el año 2001 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, cum. Atque, impedit, nulla voluptatum minus ducimus dolorem voluptate delectus ipsa eveniet, officia sequi magni dolor facilis mollitia commodi sunt dolore?
                    Quibusdam odit ex facilis natus impedit, aspernatur reiciendis illo ipsum consequatur exercitationem nisi laboriosam maxime sint minima hic obcaecati velit iusto ea. Alias perferendis ea doloremque, aspernatur velit repellat tempora.
                    Voluptatum dolore temporibus et atque non. <br/>Consequuntur expedita, laboriosam rerum obcaecati perspiciatis cum. Perferendis aliquid porro, minus magnam ea vel ullam voluptates, quos illo ducimus blanditiis reprehenderit, doloribus nam maiores.
                    Eveniet non dolor expedita perspiciatis, recusandae placeat sint nostrum eum, atque obcaecati optio sequi nam mollitia, neque itaque temporibus aliquam ipsa. Molestiae itaque iure natus eum quibusdam impedit. Neque, aspernatur?
                    Doloremque repudiandae repellendus reiciendis porro, autem impedit iure eveniet quia explicabo hic suscipit temporibus quo quidem natus reprehenderit maxime adipisci minima. Eligendi, sit! Autem eius, blanditiis suscipit deleniti aperiam velit.
                    Fuga, explicabo nesciunt? Dolorem aperiam adipisci, natus rerum non nulla saepe atque numquam? Unde dolorum atque, maiores beatae laborum suscipit vitae pariatur, a aperiam, debitis quaerat eius esse exercitationem officiis.</p>
                
                <div className="font-mono font-bold text-3xl tracking-wide text-center">MISIÓN</div>
                    <p className='text-justify'>Proporcionar servicios de financiamiento competitivos a MiPyME y personas físicas de manera rápida, eficiente y efectiva, a través de un personal motivado y capaz.</p>
                
                <div className="font-mono font-bold text-3xl tracking-wide text-center">VISIÓN</div>
                    <p className='text-justify'>Posicionarnos a nivel nacional como una de las primeras opciones de financiamiento a la MiPyME, ofreciendo las mejores facilidades para el desarrollo de nuestros clientes y asociados.</p>
                
                <div className="font-mono font-bold text-3xl tracking-wide">VALORES</div>

            </div>
            </main>

    );
}
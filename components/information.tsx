

export default function Information(){
    return(
        <main>
            <br />
            <h1 className="font-bold text-3xl text-center py-10">INFORMACIÓN</h1>
            <div className="text-center px-4">
                Estamos para escucharte. No dudes en ponerte en contacto con nosotros si tienes alguna queja, duda o sugerir cualquier necesidad que presentes.  <br /><br />
            </div>
            
            <div className="numeros px-4 text-center">
                
            <h2 className="font-semibold text-xl px-3">Teléfonos</h2>
           <div className="grid grid-cols-2 px-48">

            <p>Santo Domingo</p> <a href="tel:+18095349053"><b>(809) 534-9053</b></a>
            <p>Santiago</p> <a href="tel:+18092474377"><b>(809) 247-4377</b></a>
            <p>Higüey</p><a href="tel:+18095541044"><b>(809) 554-1044</b></a>
            <p>WhatsApp</p><a href="https://web.whatsapp.com/send/?phone=18293442555&text=Hola.+Estoy+interesado+en+un+pr%C3%A9stamo.https://web.whatsapp.com/send/?phone=18293442555&text=Hola.%20He%20visto%20este%20enlance%20en%20la%20p%C3%A1gina%20web,%20me%20estoy%20comunicando%20con%20ustedes%20debido%20a"><b>(829) 344-2555</b></a>
            <p>Correo</p><a className="text-lime-600" href="mailto:ypena@invernuesa.com">info@invernuesa.com</a>
           </div>
            </div>

         </main>
    )
}
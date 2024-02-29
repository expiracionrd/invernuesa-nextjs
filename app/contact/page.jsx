// import Image from 'next/image'
// import Information from '@/components/information'
// import ContactArea from '@/components/contact'


// export default function Contact(){
//     return(
//         <main>
//         <div className='w-full mx-auto h-80 bg-[url("/images/contact.png")] bg-cover'> </div>
//             <div className='grid grid-cols-2 gap-4'>
//                 <Information/>
//                 <ContactArea/>
//             </div>
//             <iframe className="py-4 w-full h-96" src="https://www.google.com/maps/d/u/0/embed?mid=1rF3AS6RdY48F5Nxd-kdGxXPa4eHlTcg&ehbc=2E312F&noprof=1"></iframe>
//         <br/>
//         </main>
//     )
// }

"use client"

import React from "react";
import {
  Button,
  IconButton,
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon, TicketIcon } from "@heroicons/react/24/solid";


export default function Contact(){
  return (
    <section className="px-8 pt-20">
    <div className="container mx-auto mb-5 md:mb-20 text-center">
      <Typography variant="h1" color="blue-gray" className="mb-4">
        ¿Tienes algún comentario para nosotros?
       </Typography>
      <Typography variant="lead" className="mx-auto !text-gray-500">
        Estamos más que encantados de escucharte, por favor, escríbennos en el campus debajo.
      </Typography>
    </div>
    <div className="container mx-auto">
      <Card shadow={true} className="border ">
        <CardBody className="grid grid-cols-1 md:p-10 lg:grid-cols-2 md:gap-28">
          <div className="w-full mt-8 md:mt-0 md:px-10 h-full p-5">
            <form action="#">
              <div className="mb-8 grid gap-4 lg:grid-cols-2">
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Nombre y apellido"
                  name="first-name"
                  placeholder=" Isaías Mendoza"
                  containerProps={{
                    className: "!min-w-full mb-3 md:mb-0 bg-gray-50 border border-gray-300",
                  }}
                />
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Número de contacto"
                  name="last-name"
                  placeholder="(829) 344-2729"
                  containerProps={{
                    className: "!min-w-full bg-gray-50 border border-gray-300",
                  }}
                />
              </div>
              {/* @ts-ignore */}
              <Input
                color="gray"
                size="lg"
                variant="static"
                label="Correo"
                name="first-name"
                placeholder="ej. fulanito@email.com"
                containerProps={{
                  className: "!min-w-full mb-8 bg-gray-50 border border-gray-300",
                }}
              />
              {/* @ts-ignore */}
              <Textarea
                color="gray"
                size="lg"
                variant="static"
                label="Exprésate aquí."
                name="first-name"
                containerProps={{
                  className: "!min-w-full mb-10 md:mb-28 bg-gray-50 border border-gray-300",
                }}
              />
              <div className="w-full flex justify-end ">
                <Button className="w-full md:w-fit p-2 bg-greenuno" size="md">
                    Enviar mensaje
                </Button>
              </div>
            </form>
          </div>
          <div className="w-full rounded-lg h-full py-8 p-5 md:p-16 bg-greenuno">
            <Typography variant="h4" color="white" className="mb-2">
              Información de contacto en oficinas
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto mb-8 text-base !text-gray-500"
            >
              Puedes acercarte a algunas de nuestras oficinas con diferentes localidades. ¡O hazlo por teléfono!
            </Typography>
            <div className="flex gap-5">
              <PhoneIcon className="h-6 w-6 text-white" />
              <Typography href="tel:+18095349053" variant="h6" color="white" className="mb-2">
                +1 (829) 534-9053
              </Typography>
              <PhoneIcon className="h-6 w-6 text-white" />
              <Typography href="tel:+18092474377" variant="h6" color="white" className="mb-2">
                +1 (809) 247-4377
              </Typography>

              <PhoneIcon className="h-6 w-6 text-white" />
              <Typography href="tel:+18095541044" variant="h6" color="white" className="mb-2">
                +1 (809) 554-1044
              </Typography>
              
            </div> 
            <div className="flex gap-12 justify-center text-white">
              <a href="tel:+18095349053" variant="h6" color="white" className="mb-2">
                Santo Domingo
              </a>
              <a href="tel:+18092474377" variant="h6" color="white" className="mb-2">
                Santiago
              </a>
              <a href="tel:+18095541044" variant="h6" color="white" className="mb-2">
Higuey              </a>
              
            </div> 
            <div className="flex my-2 gap-5">
              <EnvelopeIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2" href="mailto:ypena@invernuesa.com">
                info@invernuesa.com
              </Typography>
            </div>
            <div className="flex mb-10 gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
              <Typography variant="h6" color="white" className="mb-2">
                    <a href="https://web.whatsapp.com/send/?phone=18293442555&text=Hola.+Estoy+interesado+en+un+pr%C3%A9stamo.https://web.whatsapp.com/send/?phone=18293442555&text=Hola.%20He%20visto%20este%20enlance%20en%20la%20p%C3%A1gina%20web,%20me%20estoy%20comunicando%20con%20ustedes%20debido%20a">WhatsApp (presiona aquí)</a>
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
     <iframe className="py-4 w-full h-96" src="https://www.google.com/maps/d/u/0/embed?mid=1rF3AS6RdY48F5Nxd-kdGxXPa4eHlTcg&ehbc=2E312F&noprof=1"></iframe>
       <br/>

  </section>
  );
}
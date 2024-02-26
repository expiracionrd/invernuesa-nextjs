"use client"

import { FormEvent } from "react"

export default function ContactArea(){

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(event)
     
        const formData = new FormData(event.currentTarget)
     
      }
    return(
        <main>
            <br />

            <h1 className="font-bold text-3xl text-center py-10">CONTÁCTANOS</h1> 
                <p className="text-center mx-30">Háblanos, te escuchamos...</p>

            <form onSubmit={onSubmit} className="grid grid-cols-2 center">


            <label htmlFor="name"></label>
            <input type="text" 
            id="name" 
            className="rounded-lg bg-slate-200 border-gray-700 p-1 mb-4"
            placeholder="Nombre"/>

            <label htmlFor="telefono"></label>
            <input type="number" id="number"
            className="rounded-lg  bg-slate-200 border-gray-700 p-1 mb-4"
            placeholder="Número" />

            <label htmlFor="area"></label>
            <input type="text" 
            id="area"
            className="rounded-lg  bg-slate-200 border-gray-700 p-1 mb-4"
            placeholder="Provincia"/>
            
            <label htmlFor="msg"></label>
            <input type="text" id="msg" maxLength={120}
            className="rounded-lg  bg-slate-200 border-gray-700 p-8 mb-4"
            placeholder="Escribe tu mensaje aquí"/>

            </form>
            <button type="submit" className="mx-96 bg-green-600 hover:bg-green-950 text-white font-bold py-2 px-4 rounded">
                Enviar
            </button>
            
        </main>
    )

}
'use client'
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

export default function Slider(){
    return(
        <main>

                    <section className="bg-black dark:bg-gray-900"/>
                            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                                <Image width={800} height={100} quality={100} className="dark:hidden" src="/images/iStock.jpg" alt="dashboard image"/>
                                <Image width={800} height={100} quality={100} className="hidden dark:block" src="/images/iStock.jpg" alt="dashboard image"/>
                                <div className="mt-4 md:mt-0">
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 bg-gradient-to-r from-greenuno via-greendos to-greenuno bg-clip-text text-transparent" >Préstamos a MiPyME rápidos y sencillos.</h2>
                                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-600">INVERNUESA está disponible cuando necesites una mano amiga. Aprovecha las oportunidades de crecimiento con nuestros préstamos aprobados y entregados en menos de 24 horas. </p>
                                    <a href="https://www.invernuesa.com.do/nuevos-pr%C3%A9stamos" className="inline-flex items-center text-black bg-gradient-to-r from-greentres to-green-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                                        Solicitar préstamo
                                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                    
                     
        </main>
        
        )
}

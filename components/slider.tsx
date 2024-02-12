'use client'
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

export default function Slider(){
    return(
                    <div className=''> 
                    <Carousel autoPlay infiniteLoop 
                    stopOnHover={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    dynamicHeight={true}
                    interval={5000}> 
                        <div> 
                            <img src="./images/prest24.png" alt="¿Necesitas una ayuda? Estamos aquí"/> 
                        </div> 
                        <div> 
                            <img src="./images/historial.png" alt="No pongas en riesgo tu crédito. Paga a tiempo." /> 
                        </div> 
                        <div> 
                            <img src="./images/publicidad-impulso.png" alt="Impulsa tu negocio con nosotros."/>
                        </div> 
                    </Carousel> 
                    </div> 
        
        )
}

import Image from 'next/image'

export default function Cards(){
    return(
    <div className="grid p-12 justify-items-center grid-cols-3 gap-8" >
        <div className="max-w-36 text-center"><img src="./images/cards/calculadora.jpg" alt="" />No cobramos gastos legales, tampoco de cierre.</div>
        <div className="max-w-36 text-center"><img src="./images/cards/reloj.png" alt="" />En 24 horas recibe  su préstamo</div>
        <div className="max-w-36 text-center"><img src="./images/cards/dinero.png" alt="" />1 día de gracia para comenzar a pagar.</div>
        <div className="max-w-36 text-center"><img src="./images/cards/money-bag.png" alt="" />Reenganche a partir del 50% saldo de su préstamo</div>
        <div className="max-w-36 text-center"><img src="./images/cards/bussiness-man.png" alt="" />Asesoría financiera ¡gratis!</div>
        <div className="max-w-36 text-center"><img src="./images/cards/NEG.jpg" alt="" />Facilidad de pago en su negocio</div>
      </div>
    )
}
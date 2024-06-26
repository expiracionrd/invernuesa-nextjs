export default function Stadistics(){
    return(
        <main>
            

<div className="w-full shadow">
    
    <div id="fullWidthTabContent">
        <div className=" p-4 md:p-8 bg-gradient-to-r from-lime-500 to-green-700" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <h2 className=" text-center mb-5 text-2xl font-extrabold tracking-tight text-white">Nuestros números hablan con el tiempo.</h2>
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-white sm:grid-cols-2 xl:grid-cols-4  sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">3</dt>
                    <dd className="text-white ">Oficinas.</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">35</dt>
                    <dd className="text-white ">Representantes ubicados en todo el país.</dd>   
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">+20 años</dt>
                    <dd className="text-white ">Pioneros en el mercado. Más de 20 años.</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">+15 mil</dt>
                    <dd className="text-white ">Clientes</dd>
                </div>

            </dl>
        </div>
       
    </div>
</div>

        </main>
    )
}
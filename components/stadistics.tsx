export default function Stadistics(){
    return(
        <main>
            

<div className="w-full shadow">
    
    <div id="fullWidthTabContent">
        <div className=" p-4 md:p-8 bg-gradient-to-r from-lime-500 to-green-700" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Nuestros numeros hablan por sí mismos.</h2>
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">3</dt>
                    <dd className="text-gray-500 dark:text-gray-600">Sucursales.</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">35</dt>
                    <dd className="text-gray-500 dark:text-gray-600">Agentes ubicados en todo el país.</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">+15 mil</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Clientes</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">+20 años</dt>
                    <dd className="text-gray-500 dark:text-gray-400">En el mercado</dd>
                </div>

            </dl>
        </div>
       
    </div>
</div>

        </main>
    )
}
export default function Jobform(){
    return(
        <main>
        <div className='w-full h-96 bg-[url("/images/empleados.png")] bg-cover'> </div>


    <form>
        <main>
            
        <h1 className="font-bold text-2xl text-center">DATOS PERSONALES</h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-red-900 dark:text-black">
                    Nombres</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Nombre" required/>
            </div>
            <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Apellidos</label>
                <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Apellido" required/>
            </div>
            <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Fecha de nacimiento</label>
                <input type="date" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Flowbite" required/>
            </div>  
            <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Teléfono celular</label>
                <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="809-123-4678" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
            </div>
            <div>
                <label htmlFor="social_statment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Estado civil:</label>
                <select name="estadocivil" id="estadocivil" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" required>
                    <option value="Soltero">Soltero</option>
                    <option value="Casado">Casado</option>
                    <option value="Concubinato">Concubinato o Unión Libre</option>
                    <option value="Viudo">Viudo</option>
                </select>
            </div>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Correo electrónico</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="fulano@micorreo.com" required/>
        </div> 
            <div>
                <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Dirección </label>
                <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Calle, sector, ciudad" required/>
            </div>
             <select name="provincia" id="provincia" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" required>
                    <option value="Soltero">Azúa</option>
                    <option value="Casado">Bahoruco</option>
                    <option value="Concubinato">Barahona</option>
                    <option value="Viudo">Dajabón</option>
                    <option value="Distrito Nacional">Distrito Nacional</option>
                    <option value="Duarte">Duarte</option>
                    <option value="Elías Pina">Elías Piña</option>
                    <option value="El Seibo">El Seibo</option>
                    <option value="Espaillat">Espaillat</option>
                    <option value="Hato Mayor">Hato Mayor</option>
                    <option value="Independencia">Independencia</option>
                    <option value="La Altagracia">La Altagracia</option>
                    <option value="La Romana">La Romana</option>
                    <option value=" La Vega"> La Vega</option>
                    <option value="Maria Trinidad Sanchez">Maria Trinidad Sanchez</option>
                    <option value=" Monseñor Nouel"> Monseñor Nouel</option>
                    <option value="Monte Cristi">Monte Cristi</option>
                    <option value="Monte Plata">Monte Plata</option>
                    <option value="Pedernales">Pedernales</option>
                    <option value="Peravia">Peravia</option>
                    <option value="Puerto Plata">Puerto Plata</option>
                    <option value="Salcedo">Salcedo</option>
                    <option value="Samana">Samaná</option>
                    <option value="Sánchez Ramírez">Sánchez Ramírez</option>
                    <option value="San Cristobal">San Cristóbal</option>
                    <option value=" San Jose de Ocoa"> San José de Ocoa</option>
                    <option value="San Juan">San Juan</option>
                    <option value="San Pedro de Macorís">San Pedro de Macorís</option>
                    <option value="Santiago">Santiago</option>
                    <option value="Santiago Rodríguez">Santiago Rodríguez</option>
                    <option value="Santo Domingo">Santo Domingo</option>
                    <option value="Valverde">Valverde</option>
                </select>
        </div>


            <h1 className="font-bold text-2xl text-center">FORMACIÓN ACADÉMICA</h1>

            <div>
                <label htmlFor="nivelestudio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nivel de estudios:</label>
                <select name="estudios" id="estudios" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" required>
                    <option value="bachiller">Bachiller</option>
                    <option value="universitario">Universitario</option>
                    <option value="phd">Postgrado / Doctorado</option>
                    <option value="estudiante">Estudiante Universitario</option>
                </select>
            </div>
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-red-900 dark:text-black">
                    Carrera</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Carrera estuadiada"/>
            </div>
            <div>
                <label htmlFor="cursos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Cursos técnicos</label>
                <input type="text" id="cursos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Cursos impartidos"/>
            </div>


            <h1 className="font-bold text-2xl text-center">EXPERIENCIA LABORAL</h1>

            <div>
                <label htmlFor="EXPERIENCIA" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Por favor, cuéntenos sus 3 últimas experiencias laborables.</label>
                <input type="text" id="experiencia" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-200  dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Trabajé en ... y aprendí o me desempeñé como ... durante ... tiempo."/>
                <label htmlFor="cv_manual" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Adjunte su hoja de vida actualizada</label>
                <input type="file" name="cv" id="cv" accept=".doc,.docx, .pdf" />
            </div>

        <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-slate-200  dark:focus:ring-green-600 dark:ring-offset-gray-800" required/>
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Acepto los <a href="#" className="text-green-600 hover:underline dark:text-green-500">términos y condiciones</a>.</label>
        </div>
        <button type="submit" className="text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Enviar</button>
        </main>
    </form>
</main>
    )
}
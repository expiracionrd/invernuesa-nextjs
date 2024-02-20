import Link from "next/link";

export default function Navbar() {
return(
<nav className="bg-white border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="https://invernuesa.com.do/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="./invernuesa.svg" className="h-9" alt="Invernuesa Logo" />
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100" aria-controls="navbar-default" aria-expanded="false">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="../public/invernuesa.svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg> 
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white   ">
        <li>
          <Link href="/" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-green-700 md:p-0  " aria-current="page">Inicio</Link>
        </li>
        <li>
          <Link href="about" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0  md:   ">Sobre nosotros</Link>
        </li>
        <li>
          <Link href="contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0  md:   ">Contacto</Link>
        </li>
        <li>
          <Link href="jobhere" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0  md:   ">Trabaja con nosotros</Link>
        </li>
        <li>
          <a href="https://www.invernuesa.com.do/nuevos-pr%C3%A9stamos" className="block py-2 px-3 text-gray-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0  md:   ">SOLICITA UN PRÉSTAMO</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
}
import Slider from "../components/slider"
import Cards from "@/components/cards";
import Stadistics from "@/components/stadistics";
import Requirements from "@/components/requirements";


export default function Home() {
  return (
    <main>
      <Slider/>
      <h3 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 bg-gradient-to-r from-greenuno via-greendos to-greenuno bg-clip-text text-transparent" >¡Transforma tu trabajo en éxito!</h3>
      <Cards/>
      <Stadistics/>
      <Requirements/>
    </main>

  );
}

import Slider from "../components/slider"
import Cards from "@/components/cards";
import Stadistics from "@/components/stadistics";
import Requirements from "@/components/requirements";
import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <Slider/>
      <Cards/>
      <Stadistics/>
      <Requirements/>
    </main>

  );
}

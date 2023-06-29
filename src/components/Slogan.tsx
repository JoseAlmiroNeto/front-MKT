import Image from "next/image";
import Asset from "../assets/asset-header.png"

export function Slogan() {
  return (
    <section className="h-[37rem] w-full bg-[#F0F8FF] flex flex-col items-center justify-center space-y-5">
      <p className="text-sm font-semibold text-blue-500 border-4 border-blue-500 py-1 px-5 rounded-t-full rounded-r-full">
        WEBINARS EXCLUSIVOS
      </p>

      <div className="w-[44rem] flex flex-col items-center border-b-2">
        <h2 className="text-5xl">Menos Conversinha,</h2>
        <h1 className="w-[42rem] text-[5.3rem] relative font-extrabold text-blue-600">
          Mais Conversão
          <Image src={Asset} alt="asset-header" className="absolute top-0 right-0 pt-4" />
        </h1>
      </div>

      <p className="text-lg">
        Conheça as estratégias que{" "}
        <span className="text-lg font-black">mudaram o jogo</span> e como
        aplicá-las no seu negócio
      </p>
    </section>
  );
}

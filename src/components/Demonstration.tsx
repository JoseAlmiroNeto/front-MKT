import Image from "next/image";
import FreeDays from "../assets/comparativo_img_CTA.png";
import Selo from "../assets/selo_RD.png";
import Card from "../assets/no-card-dark.webp";
import Star from "../assets/rating.webp";

export function Demonstration() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-around py-6 bg-[#F0F8FF] sm:flex sm:flex-row">
      <Image src={FreeDays} alt="free-days" className="md:w-80 lg:w-96 xl:w-[34rem] 2xl:w-[40rem]" />

      <div className="space-y-2">
        <div className="space-y-2 text-[#1C3C50]">
          <h2 className="font-medium text-xl xl:text-3xl 2xl:text-4xl">
            Pronto para triplicar sua
          </h2>
          <h2 className="text-xl xl:text-3xl 2xl:text-4xl font-bold">Geração de Leads?</h2>

          <p className="text-sm xl:text-base 2xl:text-xl">
            Criação e ativação em <span className="font-bold">4 minutos.</span>
          </p>
        </div>

        <div className="flex items-center py-4 space-x-2 border-t-2">
          <button className="px-4 py-4 text-xs sm:px-8 sm:py-6 md:px-6 md:py-4 xl:text-base xl:px-10 2xl:text-xl rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-500">
            VER DEMONSTRAÇÃO
          </button>

          <Image src={Selo} alt="selo" className="w-32 md:w-36"/>
        </div>

        <div className=" items-center space-x-2 text-xs xl:text-sm 2xl:text-base lg:flex">
          <div className="flex items-center space-x-2">
            <Image src={Card} alt="card" />
            <p>Não é necessário Cartão de Crédito.</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={Star} alt="star" />
            <p>4.9/5 média de satisfação.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

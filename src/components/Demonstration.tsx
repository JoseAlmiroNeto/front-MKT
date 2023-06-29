import Image from "next/image";
import FreeDays from "../assets/comparativo_img_CTA.png";
import Selo from "../assets/selo_RD.png";
import Card from "../assets/no-card-dark.webp";
import Star from "../assets/rating.webp";

export function Demonstration() {
  return (
    <section className="w-full h-full flex items-center justify-evenly py-6 bg-[#F0F8FF]">
      <Image src={FreeDays} alt="free-days" />

      <div className="space-y-2">
        <div className="space-y-2 text-[#1C3C50]">
          <h2 className="w-[26rem] text-4xl font-medium">
            Pronto para triplicar sua {""}
            <span className="font-bold">Geração de Leads?</span>
          </h2>

          <p className="text-xl">
            Criação e ativação em <span className="font-bold">4 minutos.</span>
          </p>
        </div>

        <div className="flex py-4 space-x-6 border-t-2">
          <button className="px-10 py-5 text-xl rounded-full bg-blue-500 text-white">
            VER DEMONSTRAÇÃO
          </button>

          <Image src={Selo} alt="selo" />
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Image src={Card} alt="card" />
            <p>Não é necessário Cartão de Crédito</p>
          </div>
          <span>|</span>
          <div className="flex items-center space-x-2">
            <Image src={Star} alt="star" />
            <p>4.9/5 média de satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
}

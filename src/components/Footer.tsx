import Image from "next/image";
import Logo from "../assets/logo.png";
import { ImLinkedin2, ImFacebook } from "react-icons/im";
import { TfiInstagram } from "react-icons/tfi";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full text-xs xl:text-sm 2xl:text-lg">
      <div className="flex flex-col items-center py-10">
        <Image src={Logo} alt="logo" className="w-44 xl:w-56 2xl:w-72" />
        <p className=" text-gray-400 hover:text-gray-500">
          Transformando visitantes em clientes.
        </p>
      </div>

      <div
        className="w-full h-auto flex flex-col justify-around items-center py-14 px-20 gap-10 text-center 
      sm:text-start sm:gap-20 sm:items-start
      md:grid md:grid-cols-2 
      lg:flex lg:flex-row"
      >
        <div className="space-y-8">
          <p className="font-semibold">Links Principais</p>
          <ul className="flex flex-col space-y-4">
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Ferramentas
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Preços
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Contato
            </Link>
          </ul>
        </div>

        <div className="space-y-8 ">
          <p className="font-semibold">Cases</p>
          <ul className="flex flex-col space-y-4">
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Geração de Leads B2B
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Geração de Leads em Software
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Geração de Leads em Imobiliária
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Cases de Sucesso
            </Link>
          </ul>
        </div>

        <div className="space-y-8 ">
          <p className="font-semibold">Meteriais</p>
          <ul className="flex flex-col space-y-4">
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Parceria com Agências
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Guia Definitivo do Marketing
            </Link>
            <Link
              href=""
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              Materiais Gratuitos
            </Link>
          </ul>
        </div>

        <div className="space-y-6 ">
          <p className="font-semibold">Siga a Leadster</p>

          <div className="flex items-center justify-center space-x-12 sm:justify-start">
            <Link href="">
              <ImLinkedin2 color="#838EAB" />
            </Link>
            <Link href="">
              <ImFacebook color="#838EAB" />
            </Link>
            <Link href="">
              <TfiInstagram color="#838EAB" />
            </Link>
          </div>

          <div className="space-y-2">
            <p>
              E-mail:
              <span className="text-gray-400"> contato@leadster.com.br</span>
            </p>
            <p>
              Telefone:
              <span className="text-gray-400"> (42) 98828-9851</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-20 flex flex-col items-center justify-evenly text-gray-400 hover:text-gray-500 border-t xl:flex xl:flex-row">
        <p>
          Copyright © 2015 - 2022 Todos os direitos reservados{" "}
          <span className="text-cyan-400">| Leadster</span>{" "}
        </p>
        <p>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          Termos de uso
        </p>
      </div>
    </footer>
  );
}

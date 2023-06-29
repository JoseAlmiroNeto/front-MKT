import Image from "next/image";
import Logo from "../assets/logo.png";
import { ImLinkedin2, ImFacebook } from "react-icons/im";
import { TfiInstagram } from "react-icons/tfi";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-col items-center py-10">
        <Image src={Logo} alt="logo" className="w-72" />
        <p className="text-gray-400">Transformando visitantes em clientes.</p>
      </div>

      <div className="w-full h-80 flex items-start text-lg justify-evenly">
        <div className="space-y-8">
          <p className="font-semibold">Links Principais</p>
          <ul className="flex flex-col space-y-4 text-gray-400">
            <Link href="">Home</Link>
            <Link href="">Ferramentas</Link>
            <Link href="">Preços</Link>
            <Link href="">Contato</Link>
          </ul>
        </div>

        <div className="space-y-8">
          <p className="font-semibold">Cases</p>
          <ul className="flex flex-col space-y-4 text-gray-400">
            <Link href="">Geração de Leads B2B</Link>
            <Link href="">Geração de Leads em Software</Link>
            <Link href="">Geração de Leads em Imobiliária</Link>
            <Link href="">Cases de Sucesso</Link>
          </ul>
        </div>

        <div className="space-y-8">
          <p className="font-semibold">Meteriais</p>
          <ul className="flex flex-col space-y-4 text-gray-400">
            <Link href="">Blog</Link>
            <Link href="">Parceria com Agências</Link>
            <Link href="">Guia Definitivo do Marketing</Link>
            <Link href="">Materiais Gratuitos</Link>
          </ul>
        </div>

        <div className="space-y-6">
          <p className="font-semibold">Siga a Leadster</p>

          <div className="flex items-center space-x-12">
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

          <div>
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

      <div className="w-full h-20 flex items-center justify-evenly text-gray-400 border-t">
        <p>Copyright © 2015 - 2022 Todos os direitos reservados <span className="text-cyan-400">| Leadster</span> </p>
        <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>
      </div>
    </footer>
  );
}

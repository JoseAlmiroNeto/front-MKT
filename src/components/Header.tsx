import Image from "next/image";
import Logo from "../assets/logo.png"

export function Header() {
  return (
    <header className="w-full h-32 flex items-center justify-center">
      <Image src={Logo} alt="logo" className="w-28 xl:w-44" />
    </header>
  )
}
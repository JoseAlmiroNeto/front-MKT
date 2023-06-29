import Image from "next/image";
import Thumb from "../../assets/thumbnail.png"

interface ICardVideo {
  title: string,
  url?: string
}

export function CardVideo({title, url}: ICardVideo) {
  return (
    <button className="h-72 w-[22.5rem] rounded-2xl shadow-2xl">
      <Image src={Thumb} alt="thumbnail" className="rounded-t-2xl" />

      <div className="h-[5.3rem] w-full flex items-center justify-center px-8 py-5 rounded-b-2xl">
        <p className="text-xl font-semibold">{title}</p>
      </div>
    </button>
  )
}
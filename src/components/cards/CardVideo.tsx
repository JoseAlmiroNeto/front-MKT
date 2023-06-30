import Image from "next/image";
import Thumb from "../../assets/thumbnail.png";
import { MouseEventHandler } from 'react';

interface ICardVideo {
  title: string;
  url?: string;
  OnClick: MouseEventHandler<HTMLDivElement>;
}

export function CardVideo({ title, url, OnClick }: ICardVideo) {
  return (
    <div className="h-72 w-[22.5rem] rounded-2xl shadow-2xl cursor-pointer" onClick={OnClick}>
      <Image src={Thumb} alt="thumbnail" className="rounded-t-2xl" />

      <div className="h-[5.3rem] w-full flex items-center justify-center px-8 py-5 rounded-b-2xl">
        <p className="text-xl font-semibold">{title}</p>
      </div>
    </div>
  );
}

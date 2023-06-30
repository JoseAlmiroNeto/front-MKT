import Image from "next/image";
import Thumb from "../../assets/thumbnail.png";
import { MouseEventHandler } from 'react';

interface ICardVideo {
  title: string;
  OnClick: MouseEventHandler<HTMLDivElement>;
}

export function CardVideo({ title, OnClick }: ICardVideo) {
  return (
    <div className="w-72 rounded-2xl shadow-2xl cursor-pointer xl:h-64 xl:w-72 2xl:h-72 2xl:w-[22.5rem]" onClick={OnClick}>
      <Image src={Thumb} alt="thumbnail" className="rounded-t-2xl" />

      <div className="h-[5.3rem] w-full flex items-center justify-center px-8 py-5 rounded-b-2xl">
        <p className="2xl:text-xl font-semibold">{title}</p>
      </div>
    </div>
  );
}

"use client";

import { ButtonTransparent } from "./buttons/ButtonTransparent";
import { CardVideo } from "./cards/CardVideo";
import VideosData from "../utils/video.json";
import { useState } from "react";

export function Videos() {
  const videosPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(VideosData.videos.length / videosPerPage);

  const handleClickPage = (pageNumbers: number) => {
    setCurrentPage(pageNumbers);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClickPage(i)}
          className={
            i === currentPage
              ? "h-10 w-10 text-xl border border-blue-500 text-blue-500"
              : "h-10 w-10 text-xl"
          }
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = VideosData.videos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  return (
    <section className="py-10 w-full flex flex-col items-center">
      <div className="h-24 flex items-center justify-center space-x-24 border-b-2">
        <div className="space-x-3.5">
          <ButtonTransparent text="Agência" active={true} />
          <ButtonTransparent text="Chatbot" active={false} />
          <ButtonTransparent text="Marketing Digital" active={false} />
          <ButtonTransparent text="Geração de Leads" active={false} />
          <ButtonTransparent text="Mídia Paga" active={false} />
        </div>

        <div className="flex items-center space-x-2">
          <p className="text-base font-semibold">Ordenar por</p>
          <select
            name=""
            id=""
            className="py-2 px-2 border-2 border-black rounded-lg"
          >
            <option value="">Data de Publicação</option>
          </select>
        </div>
      </div>

      <div
        className="w-full h-[62rem] flex flex-wrap justify-around py-4 border-b-2 
      xl:w-[73rem]
      "
      >
        {currentVideos.map((video, index) => (
          <CardVideo key={index} title={video.title} url={video.url} />
        ))}
      </div>

      <div className="h-20 flex items-center space-x-8">
        <p className="text-xl font-semibold">Pagina</p>
        {renderPageNumbers()}
      </div>
    </section>
  );
}
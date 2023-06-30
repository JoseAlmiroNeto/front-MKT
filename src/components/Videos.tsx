"use client";

import { BiFilterAlt } from "react-icons/bi";
import { DownloadCard } from "./cards/DowloadCard";
import { ButtonTransparent } from "./buttons/ButtonTransparent";
import { CardVideo } from "./cards/CardVideo";
import { useState } from "react";
import { Player } from "../components/Player";
import VideosData from "../utils/video.json";

import Modal from "./modal/Modal";

export function Videos() {
  const [selectedVideo, setSelectedVideo] = useState({
    title: "",
    description: "",
    url: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const videosPerPage = 6;
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

  const openModal = (title: string, url: string, description: string) => {
    setIsModalOpen(true);
    setSelectedVideo({
      ...selectedVideo,
      title: title,
      url: url,
      description: description,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-10 w-full flex flex-col items-center">
      {/* botoes de filtragem */}
      <div className="h-24 w-[90%] flex items-center justify-between border-b-2 xl:w-[58rem] 2xl:w-[70rem]">
        <button className="lg:hidden">
          <BiFilterAlt className="h-8 w-8 hover:text-gray-700" />
        </button>

        <div className="space-x-3 hidden lg:block">
          <ButtonTransparent text="Agência" active={true} />
          <ButtonTransparent text="Chatbot" active={false} />
          <ButtonTransparent text="Marketing Digital" active={false} />
          <ButtonTransparent text="Geração de Leads" active={false} />
          <ButtonTransparent text="Mídia Paga" active={false} />
        </div>

        <div className="flex items-center space-x-2">
          <p className="text-base font-semibold hidden sm:block">Ordenar por</p>
          <select
            name=""
            id=""
            className="py-2 px-2 border-2 border-black rounded-lg"
          >
            <option value="">Data de Publicação</option>
          </select>
        </div>
      </div>

      {/* map dos videos */}
      <div className="w-full h-auto flex flex-wrap justify-evenly py-4 gap-4 border-b-2 xl:xl:w-[58rem] xl:gap-4 2xl:w-[73rem]">
        {currentVideos.map((video, index) => (
          <CardVideo
            OnClick={() => openModal(video.title, video.url, video.description)}
            key={index}
            title={video.title}
          />
        ))}
      </div>

      {/* paginação */}
      <div className="h-20 w-[90%] flex items-center justify-center space-x-8 scrollbar overflow-x-auto">
        <p className="text-xl font-semibold hidden sm:block">Página</p>
        {renderPageNumbers()}
      </div>

      {/* modal contendo os videos com as informações */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="h-full w-full flex flex-col items-center overflow-y-scroll scrollbar">
          <h1 className="py-6 w-full px-8 text-xs xl:text-sm 2xl:h-32 2xl:text-2xl font-bold flex items-center">
            Webinar: {selectedVideo.title}
          </h1>

          <Player url={selectedVideo.url} height="50%" />

          <div className="w-full px-8 py-4 space-y-2">
            <p className="text-start font-bold pb-2 border-b text-xs 2xl:text-base">
              Descrição
            </p>
            <p className="text-start text-xs xl:text-base">
              {selectedVideo.description}
            </p>
          </div>

          <div className="w-full px-8 py-4 space-y-2">
            <p className="text-start font-bold pb-2 border-b text-xs 2xl:text-base">
              Downloads
            </p>
            <div className="flex flex-col gap-2 sm:space-x-4 md:flex-row">
              <DownloadCard title="Spredsheet.xls" className="bg-green-100" />
              <DownloadCard title="Document.doc" className="bg-blue-100" />
              <DownloadCard
                title="Presentation.ppt"
                className="bg-yellow-100"
              />
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}

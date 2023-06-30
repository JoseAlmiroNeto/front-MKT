import { AiOutlineCloudDownload } from "react-icons/ai";

interface IDownloadCard {
  title: string;
  className: string;
}

export function DownloadCard({ title, className }: IDownloadCard) {
  return (
    <button
      className={`flex items-center py-2 px-4 rounded-lg space-x-2 text-[10px] 2xl:text-base ${className}`}
    >
      <AiOutlineCloudDownload />
      <p>{title}</p>
    </button>
  );
}

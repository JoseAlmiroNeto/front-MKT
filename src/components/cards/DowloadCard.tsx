import { AiOutlineCloudDownload } from "react-icons/ai";

interface IDownloadCard {
  title: string;
  className: string;
}

export function DownloadCard({ title, className }: IDownloadCard) {
  return (
    <div
      className={`flex items-center py-2 px-4 rounded-lg space-x-2 ${className}`}
    >
      <AiOutlineCloudDownload />
      <p>{title}</p>
    </div>
  );
}

import ReactPlayer from 'react-player';

interface PlayerProps {
  url: string;
}

export const Player: React.FC<PlayerProps> = ({ url }) => {
  return (
    <ReactPlayer
      url={url}
      controls={true}
      className="min-w-full"
    />
  );
};

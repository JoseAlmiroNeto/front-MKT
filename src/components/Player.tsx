import ReactPlayer from 'react-player';

interface PlayerProps {
  url: string;
  width?: string;
  height?: string;
}

export const Player: React.FC<PlayerProps> = ({ url, height }) => {
  return (
    <ReactPlayer
      url={url}
      controls={true}
      width={'100%'} 
      height={height}
    />
  );
};

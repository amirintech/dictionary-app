import { FC, useEffect, useRef } from "react";
import { BsPlayFill } from "react-icons/bs";

interface Props {
  source: string;
}

const AudioPlayer: FC<Props> = ({ source }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) audioRef.current.play();
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = source;
      audioRef.current.load();
    }
  }, [source]);

  return (
    <button
      onClick={playSound}
      className="group flex h-12 w-12 items-center justify-center rounded-full bg-violet/25 duration-200 hover:bg-violet md:h-[75px] md:w-[75px]"
    >
      <audio ref={audioRef}>
        <source src={source} type="audio/mpeg" />
      </audio>

      <BsPlayFill className="h-5 w-5 text-violet duration-200 group-hover:text-white md:h-8 md:w-8" />
    </button>
  );
};

export default AudioPlayer;

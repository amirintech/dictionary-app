import { FC } from "react";
import { BsPlayFill } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const PlayButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex h-12 w-12 items-center justify-center rounded-full bg-violet/25 duration-200 hover:bg-violet md:h-[75px] md:w-[75px]"
    >
      <BsPlayFill className="h-5 w-5 text-violet duration-200 group-hover:text-white md:h-8 md:w-8" />
    </button>
  );
};

export default PlayButton;

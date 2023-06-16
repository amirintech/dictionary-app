import { FC } from "react";

interface Props {
  text?: string;
}

const Seperator: FC<Props> = ({ text }) => {
  return (
    <div className="my-8 flex items-center gap-5 md:my-10 md:gap-7">
      {text && (
        <span className="text-lg font-bold italic duration-200 md:text-2xl">
          {text}
        </span>
      )}
      <hr className="w-full border-t border-grey-200 duration-200 dark:border-grey-700" />
    </div>
  );
};

export default Seperator;

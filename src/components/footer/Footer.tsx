import { FC } from "react";
import Seperator from "../shared/Seperator";
import { HiOutlineExternalLink } from "react-icons/hi";

interface Props {
  source: string;
}

const Footer: FC<Props> = ({ source }) => {
  return (
    <>
      <Seperator />
      <footer className="items-center gap-6 text-sm md:flex">
        <h3 className="mb-2 text-grey-600 underline md:mb-0">Source</h3>

        <a
          key={Math.random()}
          href={source}
          target="_blank"
          className="flex items-center gap-2"
        >
          <span className="underline">{source}</span>
          <HiOutlineExternalLink />
        </a>
      </footer>
    </>
  );
};

export default Footer;

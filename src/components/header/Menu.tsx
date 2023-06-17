import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import useTheme from "./theme/useTheme";
import { Font, fonts } from "../../utils/constants";

const Menu = () => {
  const { font, setFont } = useTheme();
  const [selectedFont, setSelectedFont] = useState(font);
  const [isOpened, setOpened] = useState(false);
  const handleFontSelect = (font: Font) => {
    setSelectedFont(font);
    setOpened(false);
    setFont(font);
  };

  return (
    <div className="relative flex w-fit min-w-[185px] flex-col text-sm font-bold md:text-lg">
      <button
        onClick={() => setOpened(!isOpened)}
        style={{ fontFamily: selectedFont.family }}
        className="flex w-fit items-center gap-4 self-end duration-200 md:gap-[18px]"
      >
        {selectedFont.name}
        <FaChevronDown
          className={`text-violet duration-200 ${isOpened ? "rotate-180" : ""}`}
        />
      </button>

      {isOpened && (
        <ul className="absolute left-0 top-10 flex w-full flex-col gap-4  rounded-2xl bg-white p-6 duration-200 [box-shadow:0_0_30px_3px_rgba(0,0,0,0.1)] dark:bg-grey-900 dark:[box-shadow:0_0_30px_3px_rgba(164,69,237,0.25)]">
          {fonts.map((font) => (
            <li
              key={font.id}
              role="button"
              onClick={() => handleFontSelect(font)}
              style={{ fontFamily: font.family }}
              className={`font-${font.family}`}
            >
              {font.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;

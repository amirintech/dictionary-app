import { FC, useState } from "react";

interface Props {
  on?: boolean;
  onClick: () => void;
}

const Switch: FC<Props> = ({ on = false, onClick }) => {
  const [isOn, setOn] = useState(on);
  const handleClick = () => {
    setOn(!isOn);
    onClick();
  };

  return (
    <label
      className={`inline-block h-5 w-10 rounded-full p-[3px] duration-200 before:block before:h-[14px] before:w-[14px] before:rounded-full before:bg-white before:duration-200 hover:bg-violet ${
        isOn
          ? "bg-violet before:translate-x-5"
          : "bg-grey-600 before:translate-x-0"
      }`}
    >
      <input
        type="checkbox"
        checked={isOn}
        onChange={handleClick}
        className="sr-only appearance-none"
      />
    </label>
  );
};

export default Switch;

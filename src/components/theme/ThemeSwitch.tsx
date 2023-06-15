import Switch from "../shared/Switch";
import useTheme from "./useTheme";
import { BiMoon } from "react-icons/bi";

const ThemeSwitch = () => {
  const { mode, toggleMode } = useTheme();
  const isDarkMode = mode === "dark";

  return (
    <div className="flex items-center gap-3 md:gap-5">
      <Switch on={isDarkMode} onClick={toggleMode} />
      <BiMoon
        className={`h-5 w-5 duration-200 ${
          isDarkMode ? "text-violet" : "text-grey-600"
        }`}
      />
    </div>
  );
};

export default ThemeSwitch;

import logo from "../../assets/icons/logo.svg";
import Menu from "./Menu";
import ThemeSwitch from "./theme/ThemeSwitch";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between">
      {/* Logo */}
      <img src={logo} alt="" className="w-7 md:w-8" />

      {/* Settings */}
      <div className="flex items-center gap-4 md:gap-7">
        <Menu />

        {/* Seperator */}
        <div className="h-6 w-[1px] bg-grey-200 duration-200 dark:bg-white"></div>

        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;

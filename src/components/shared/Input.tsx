import { ChangeEvent, FC } from "react";
import { GoSearch } from "react-icons/go";

interface Props {
  type?: string;
  error: Error | null;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const Input: FC<Props> = ({
  type = "text",
  error,
  value,
  placeholder,
  onChange,
  onSearch,
}) => {
  return (
    <div className="md:text-xl">
      <div
        className={`flex items-center overflow-hidden rounded-2xl bg-grey-100 pr-6 duration-200 focus-within:ring-1 focus-within:ring-violet dark:bg-grey-900 ${
          error ? "ring-1 ring-red" : ""
        }`}
      >
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyUp={(e) => e.key === "Enter" && onSearch()}
          className="w-full bg-transparent py-4 pl-6 font-bold text-grey-800 outline-none duration-200 placeholder:text-grey-800/25 dark:text-white dark:placeholder:text-white/20 md:py-5"
        />
        <GoSearch role="button" onClick={onSearch} className="text-violet" />
      </div>

      {error && (
        <span className="mt-2 inline-block text-red">{error.message}</span>
      )}
    </div>
  );
};

export default Input;

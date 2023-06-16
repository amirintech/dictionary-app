import { FC } from "react";
import { Definition } from "../../models/word";

interface Props {
  definitions: Definition[];
}

const List: FC<Props> = ({ definitions }) => {
  return (
    <div>
      <h3 className="mb-4 text-grey-600 md:mb-6 md:text-xl">Meaning</h3>

      <ul className="m-0 flex flex-col gap-4 p-0">
        {definitions.map(({ definition, example }, idx) => (
          <li
            key={idx}
            className="flex text-violet before:font-sans before:content-['•'] md:pl-5"
          >
            <p className="flex flex-col gap-1 pl-3">
              {/* Definition */}
              <span className="inline-block text-grey-800 duration-200 dark:text-white">
                {definition}
              </span>

              {/* Example */}
              {example && (
                <span className="text-[15px] text-grey-600 md:text-lg">
                  "{example}"
                </span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

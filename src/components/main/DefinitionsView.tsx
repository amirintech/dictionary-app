import { FC } from "react";
import { Definition } from "../../models/word";
import List from "../shared/List";

interface Props {
  synonyms: string[];
  definitions: Definition[];
}

const DefinitionsView: FC<Props> = ({ synonyms, definitions }) => {
  const formattedSynonyms = synonyms.join(", ");

  return (
    <section>
      <List definitions={definitions} />

      {synonyms.length > 0 && (
        <div className="mt-10 flex items-start gap-6 md:text-xl">
          <h3 className="text-grey-600">Synonyms</h3>
          <p className="font-bold text-violet">{formattedSynonyms}</p>
        </div>
      )}
    </section>
  );
};

export default DefinitionsView;

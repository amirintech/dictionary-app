import { FC, Fragment } from "react";
import Word from "../../models/word";
import AudioPlayer from "../shared/AudioPlayer";
import Seperator from "../shared/Seperator";
import DefinitionsView from "./DefinitionsView";
import Footer from "../footer/Footer";

interface Props {
  word: Word;
}

const WordView: FC<Props> = ({
  word: { word: text, phonetic, phonetics, meanings, sourceUrls },
}) => {
  const phoneticAudioURL = phonetics.find(
    (phonetic) => phonetic.audio.length > 0
  )?.audio;
  console.log(phoneticAudioURL);

  return (
    <>
      <section className="mt-7 flex items-center justify-between md:mt-[52px]">
        <div>
          {/* word */}
          <h1 className="mb-2 text-[32px] font-bold capitalize leading-none md:text-[64px]">
            {text}
          </h1>

          {/* International Phonetic Alphabet (IPA) */}
          <span className="font-sans text-lg tracking-widest text-violet md:text-2xl">
            {phonetic}
          </span>
        </div>

        {/* Phonetic */}
        {phoneticAudioURL && <AudioPlayer source={phoneticAudioURL} />}
      </section>

      {/* Meanings */}
      {meanings.map(({ partOfSpeech, synonyms, definitions }, idx) => (
        <Fragment key={idx}>
          <Seperator text={partOfSpeech} />
          <DefinitionsView definitions={definitions} synonyms={synonyms} />
        </Fragment>
      ))}

      {/* Footer */}
      <Footer source={sourceUrls[0]} />
    </>
  );
};

export default WordView;

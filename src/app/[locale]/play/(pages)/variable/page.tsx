'use client';

import LevelVariable from "@/components/LevelVariable";
import { useTranslations } from "next-intl";

export default function Constant() {
  const t = useTranslations("variable-level");

  // Fetch data using translations
  const intro = t("pixel-puff-dialogues.introduction");
  const defFirst = t("pixel-puff-dialogues.definitions.first");
  const defSecond = t("pixel-puff-dialogues.definitions.second");

  const exFirst = t("pixel-puff-dialogues.explanations.first");
  const exSecond = t("pixel-puff-dialogues.explanations.second");
  const exThird = t("pixel-puff-dialogues.explanations.third");
  const exFourth = t("pixel-puff-dialogues.explanations.fourth");
  const exFifth = t("pixel-puff-dialogues.explanations.fifth");
  const exSix = t("pixel-puff-dialogues.explanations.sixth");
  const exSev = t("pixel-puff-dialogues.explanations.seventh");

  const chalFirst = t("pixel-puff-dialogues.challenge.first");
  const chalSuccess = t("pixel-puff-dialogues.challenge.sucess");
  const chalFailure = t("pixel-puff-dialogues.challenge.failure");

  return (
    <LevelVariable
      intro={intro}
      def={defFirst}
      exFirst={exFirst}
      exSecond={exSecond}
      exThird={exThird}
      exFourth={exFourth}
      exFifth={exFifth}
      exSix= {exSix}
      exSev= {exSev}
      chalFirst={chalFirst}
      chalSuccess={chalSuccess}
      chalFailure={chalFailure}
    />
  );
}

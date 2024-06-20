'use client';

import LevelConstant from "@/components/LevelConstent";
import { useTranslations } from "next-intl";

export default function Constant() {
  const t = useTranslations("constant-level");

  // Fetch data using translations
  const intro = t("pixel-puff-dialogues.introduction");
  const defFirst = t("pixel-puff-dialogues.definitions.first");
  const defSecond = t("pixel-puff-dialogues.definitions.second");

  const exFirst = t("pixel-puff-dialogues.explanations.first");
  const exSecond = t("pixel-puff-dialogues.explanations.second");
  const exThird = t("pixel-puff-dialogues.explanations.third");
  const exFourth = t("pixel-puff-dialogues.explanations.fourth");
  const exFifth = t("pixel-puff-dialogues.explanations.fifth");

  const chalFirst = t("pixel-puff-dialogues.challenge.title");
  const chalSuccess = t("pixel-puff-dialogues.challenge.sucess");
  const chalFailure = t("pixel-puff-dialogues.challenge.failure");

  return (
    <LevelConstant
      intro={intro}
      def={defFirst}
      defSecond={defSecond}
      exFirst={exFirst}
      exSecond={exSecond}
      exThird={exThird}
      exFourth={exFourth}
      exFifth={exFifth}
      chalFirst={chalFirst}
      chalSuccess={chalSuccess}
      chalFailure={chalFailure}
    />
  );
}

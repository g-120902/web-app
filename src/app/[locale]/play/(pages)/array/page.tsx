'use client';

import LevelArray from "@/components/LevelArray";
import { useTranslations } from "next-intl";

export default function Constant() {
  const t = useTranslations("array-level");

  // Fetch data using translations
  const intro = t("pixel-puff-dialogues.introduction");
  const defFirst = t("pixel-puff-dialogues.definitions.first");
  const defSecond = t("pixel-puff-dialogues.definitions.second");
  const defThird = t("pixel-puff-dialogues.definitions.second");
  const defFourth = t("pixel-puff-dialogues.definitions.second");

  const exFirst = t("pixel-puff-dialogues.explanations.first");
  const exSecond = t("pixel-puff-dialogues.explanations.second");
  const exThird = t("pixel-puff-dialogues.explanations.third");


  const chalFirst = t("pixel-puff-dialogues.challenge.first");
  const chalSuccess = t("pixel-puff-dialogues.challenge.sucess");
  const chalFailure = t("pixel-puff-dialogues.challenge.failure");

  return (
    <LevelArray
      intro={intro}
      def={defFirst}
      defSecond={defSecond}
      defThird={defThird}
      defFourth={defFourth}
      exFirst={exFirst}
      exSecond={exSecond}
      exThird={exThird}
      chalFirst={chalFirst}
      chalSuccess={chalSuccess}
      chalFailure={chalFailure}
    />
  );
}

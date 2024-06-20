'use client';

import LevelBinaryTree from "@/components/LevelBinaryTree";
import { useTranslations } from "next-intl";

export default function Constant() {
  const t = useTranslations("tree-level");

  // Fetch data using translations
  const intro = t("pixel-puff-dialogues.introduction.first");
  const introSec = t("pixel-puff-dialogues.introduction.second");

  const defFirst = t("pixel-puff-dialogues.definitions.first");
  const defSecond = t("pixel-puff-dialogues.definitions.second");
  const defThird = t("pixel-puff-dialogues.definitions.third");
  const defFourth = t("pixel-puff-dialogues.definitions.fourth");
  const defFifth = t("pixel-puff-dialogues.definitions.fifth");

  const exFirst = t("pixel-puff-dialogues.explanations.first");
  const exSecond = t("pixel-puff-dialogues.explanations.second");
  const exThird = t("pixel-puff-dialogues.explanations.third");
  const exFourth = t("pixel-puff-dialogues.explanations.fourth");
  const exFifth = t("pixel-puff-dialogues.explanations.fifth");

  const chalFirst = t("pixel-puff-dialogues.challenge.title");
  const chalSuccess = t("pixel-puff-dialogues.challenge.sucess");
  const chalFailure = t("pixel-puff-dialogues.challenge.failure");

  return (
    <LevelBinaryTree
      intro={intro}
      introSec={introSec}
      def={defFirst}
      defSecond={defSecond}
      defThird= {defThird}
      defFourth={defFourth}
      defFifth={defFifth}
      exFirst={exFirst}
      exSecond={exSecond}
      exThird={exThird}
      exFourth={exFourth}
      exFifth={exFifth}
      chalFirst={chalFirst}
      chalSuccess={chalSuccess}
      chalFailure={chalFailure}    />
  );
}

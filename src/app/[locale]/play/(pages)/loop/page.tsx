'use client';

import LevelLoops from "@/components/LevelLoops";
import { useTranslations } from "next-intl";

export default function Constant() {
  const t = useTranslations("loop-level");

  // Fetch content using translations
  const content = {
    introductionFirst: t("pixel-puff-dialogues.introduction.first"),
    introductionSecond: t("pixel-puff-dialogues.introduction.second"),
    definitionsFirst: t("pixel-puff-dialogues.definitions.first"),
    definitionsSecond: t("pixel-puff-dialogues.definitions.second"),
    definitionsThird: t("pixel-puff-dialogues.definitions.third"),
    definitionsFourth: t("pixel-puff-dialogues.definitions.fourth"),
    explanationFirst: t("pixel-puff-dialogues.explanations.first"),
    explanationSecond: t("pixel-puff-dialogues.explanations.second"),
    challengeTitle: t("pixel-puff-dialogues.challenge.title"),
    challengeSuccess: t("pixel-puff-dialogues.challenge.sucess"),
    challengeFailure: t("pixel-puff-dialogues.challenge.failure"),
  };

  return (
    <LevelLoops
      intro={content.introductionFirst}
      introsec={content.introductionSecond}
      def={content.definitionsFirst}
      defSecond={content.definitionsSecond}
      defThird={content.definitionsThird}
      defFourth={content.definitionsFourth}
      exFirst={content.explanationFirst}
      exSecond={content.explanationSecond}
      chalFirst={content.challengeTitle}
      chalSuccess={content.challengeSuccess}
      chalFailure={content.challengeFailure}
    />
  );
}

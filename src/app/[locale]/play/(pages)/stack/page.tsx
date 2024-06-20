'use client';

import LevelStack from "@/components/LevelStack";
import { useTranslations } from "next-intl";

export default function Constant() {
  const t = useTranslations("stack-level");

  // Fetch data using translations
  const intro = t("pixel-puff-dialogues.introduction.first");
  const introSec = t("pixel-puff-dialogues.introduction.second");

  const def = t("pixel-puff-dialogues.definitions.first");
  const defSecond = t("pixel-puff-dialogues.definitions.second");
  const defThird = t("pixel-puff-dialogues.definitions.third");
  const defFourth = t("pixel-puff-dialogues.definitions.fourth");

  const exFirst = t("pixel-puff-dialogues.explanations.first");
  const exSecond = t("pixel-puff-dialogues.explanations.second");
  const exThird = t("pixel-puff-dialogues.explanations.third");

  const chalFirst = t("pixel-puff-dialogues.challenge.first");
  const chalSuccess = t("pixel-puff-dialogues.challenge.sucess");
  const chalFailure = t("pixel-puff-dialogues.challenge.failure");

  return (
    <LevelStack
      intro={intro}
      introSec={introSec}

      def={def}
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

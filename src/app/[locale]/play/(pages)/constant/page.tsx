'use client'

import LevelBase from "@/components/LevelBase";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Constant(): JSX.Element {
  const t = useTranslations("constant-level");

  const [intro, setPixelPuff] = useState(t("pixel-puff-dialogues.introduction"));
  const [def, setDef] = useState(t("pixel-puff-dialogues.definitions.first"));
  const [defSecond, setDefSecond] = useState(t("pixel-puff-dialogues.definitions.second"));

  const [charFirst, setCharFirst] = useState(t("pixel-puff-dialogues.characteristics.first"));
  const [charSecond, setCharSecond] = useState(t("pixel-puff-dialogues.characteristics.second"));
  const [charThird, setCharThird] = useState(t("pixel-puff-dialogues.characteristics.third"));

  const [exFirst, setExFirst] = useState(t("pixel-puff-dialogues.examples.first"));
  const [exSecond, setExSecond] = useState(t("pixel-puff-dialogues.examples.second"));

  const [exerFirst, setExerFirst] = useState(t("pixel-puff-dialogues.exercices.first"));
  const [exerSuccess, setExerSuccess] = useState(t("pixel-puff-dialogues.exercices.sucess"));
  const [exerFailure, setExerFailure] = useState(t("pixel-puff-dialogues.exercices.failure"));

  const [chalFirst, setChalFirst] = useState(t("pixel-puff-dialogues.challenge.first"));
  const [chalSecond, setChalSecond] = useState(t("pixel-puff-dialogues.challenge.second"));
  const [chalSuccess, setChalSuccess] = useState(t("pixel-puff-dialogues.challenge.sucess"));

  return (
    <LevelBase 
      intro={intro} 
      def={def} 
      defSecond={defSecond}
      charFirst={charFirst}
      charSecond={charSecond}
      charThird={charThird}
      exFirst={exFirst}
      exSecond={exSecond}
      exerFirst={exerFirst}
      exerSuccess={exerSuccess}
      exerFailure={exerFailure}
      chalFirst={chalFirst}
      chalSecond={chalSecond}
      chalSuccess={chalSuccess}
    />
  );
}

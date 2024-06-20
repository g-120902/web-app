'use client'

import LevelBase from "@/components/LevelBase";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Constant(): JSX.Element {
  const t = useTranslations("constant-level")
  const [pixelPuff, setPixelPuff] = useState(t("pixel-puff-dialogues.introduction"))

  
    return (
      <LevelBase text={pixelPuff}/>
    )
  }

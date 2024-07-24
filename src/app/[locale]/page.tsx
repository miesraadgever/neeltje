"use client"

import { useCurrentLocale, useI18n } from "../../../translations/client";
import React, {useState} from "react";
import Image from "next/image";
import image from "@/public/plaatje.png"
import {useWindowSize} from "@/lib/hooks/useWindowsize";

export default function Home() {

  const t = useI18n();

    const windowSize = useWindowSize();
    const smallScreen = windowSize.width! < 745;

  return (
      
      <div className={""}>
        <div className={ smallScreen ? `pt-10 flex flex-col`: `grid grid-cols-7 gap-4 m-10 pl-10`}>
        <div className={ smallScreen ? ``:"col-span-3 pt-20 pl-10" }>
        <p className={ smallScreen ? `font-medium text-3xl pl-3`:"col-span-3 font-medium text-2xl mb-4 pt-10"}>{t("home.titel")} {t("home.titel1")}</p>
          <div className={smallScreen ? "pl-3" : ""}>
            <br />
          {t("home.intro")} <br />
          {t("home.intro1")} <br />
          {t("home.intro2")} <br /><br />
              <i>{t("home.kom")} <br /><br /></i>
          </div>
          </div>
        <div className={ smallScreen ? `p-5`: "col-span-4 pl-10 pt-20"}> <Image width={720} height={800} src={image} alt="plaatje" /></div>
          </div>
      </div>
  );
}

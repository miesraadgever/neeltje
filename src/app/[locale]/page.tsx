"use client"

import { useCurrentLocale, useI18n } from "../../../translations/client";
import React from "react";
import Image from "next/image";
import image from "@/public/plaatje.png"

export default function Home() {

  const t = useI18n();
  
  return (
      
      <div>
        <div className="grid grid-cols-7 gap-4 m-10 pl-10">
        <div className="col-span-3 pt-20 pl-10">
        <p className="col-span-3 font-medium text-2xl mb-4 pt-10">{t("home.titel")} {t("home.titel1")}</p>
          <br />
          {t("home.intro")} <br /><br />
          {t("home.intro1")} <br /><br />
          {t("home.intro2")} <br /><br /><br />
          {t("home.kom")} <br /><br />
          </div>
        <div className="col-span-4 pl-10 pt-20"> <Image width={720} height={800} src={image} alt="plaatje" /></div>
          </div>
      </div>
  );
}

"use client"

import React, {useState} from "react";
import Image from "next/image";
import image from "@/public/12.jpg"
import {useI18n} from "../../../../../translations/client";
import {useWindowSize} from "@/lib/hooks/useWindowsize";

const Page = () => {
  const t = useI18n();

  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 745;

  return (
    <>
      <div className={ smallScreen ? `pt-3 flex flex-col ps-3`: "grid grid-cols-6 gap-4 m-10 pl-10"}>
        <div className="col-span-4 pt-10 pr-10">
          <p className="col-span-4 font-medium text-2xl mb-4">{t("lessen.title1")}</p>
          {t("lessen.caption")} <br /><br /> 
          {t("lessen.caption1")} {t("lessen.caption2")} {t("lessen.caption3")} <br /><br />
          {t("lessen.caption4")}
          <p className="col-span-4 font-medium text-2xl mb-4 pt-10">{t("lessen.title2")}</p>
          {t("lessen.les")} {t("lessen.les1")}  <br /><br />
          <div className="grid grid-cols-2 gap-4 text-s">
            <div>
              <i>{t("lessen.di1")}</i><br />
              <i>{t("lessen.di2")}</i> <br />
              <i>{t("lessen.di3")}</i><br /><br />
            </div>
            <div>
              <i>{t("lessen.wo1")}</i><br />
              <i>{t("lessen.wo2")}</i><br />
              <i>{t("lessen.wo3")}</i><br /><br />
            </div>
          </div>
        </div>
        <div className="col-span-2 pt-10">
          <Image width={ smallScreen ? 385 : 900} height={smallScreen ? 500 : 1000} src={image} alt="patroon" /><br />
        </div>
      </div>
    </>
  );
};

export default Page;

"use client"

import React from "react";
import {useI18n} from "../../../../../translations/client";
import image from "@/public/infoplaatje.png";
import Image from "next/image";
import {useWindowSize} from "@/lib/hooks/useWindowsize";

const Page = () => {
  const t = useI18n();

    const windowSize = useWindowSize();
    const smallScreen = windowSize.width! < 745;
  
  return (
      <>
        <div className={smallScreen ? `pt-3 flex flex-col ps-3`:"grid grid-cols-6 gap-4 m-10 pl-10"}>
            {smallScreen &&
                <div className="pt-10">
                    <Image width={900} height={1000} src={image} alt="My Image1"></Image>
                </div>}
          <div className="col-span-2 pt-10">
          <p className="col-span-2 font-medium text-2xl mb-4">{t("praktisch.kosten")}</p>
              {t("praktisch.kosten1")} <br /><br />
              </div>
            {!smallScreen &&
          <div className="col-span-4 pl-10 pt-10">
          <Image width={900} height={1000} src={image} alt="My Image1"></Image>
          </div>
            }

          <div className="col-span-2 font-medium text-2xl pt-10">{t("praktisch.voor")} </div>
            {smallScreen &&
                <>
                    <div className="pt-4">
                        {t("praktisch.voor1")}
                    </div>
                <div className="pb-4">
            {t("praktisch.voor2")}
                </div></>
            }

          <div className={smallScreen ? `pb-3 font-medium text-2xl pt-10`:"col-span-4 font-medium text-2xl pt-10 pl-10"}>{t("praktisch.mat")} </div>

            { !smallScreen &&   <div className="col-span-2 ">
                {t("praktisch.voor1")} </div>}

          <div className={smallScreen ?` ` :"col-span-4 pl-10"}> {t("praktisch.mat1")} </div>
            { !smallScreen &&
                <div className="col-span-2 "> {t("praktisch.voor2")} <br /> </div>
            }
          <div className={smallScreen ?`pt-2 ` : "col-span-2 pl-10"}>
              <i>{t("praktisch.mat2")}</i> <br />
              {t("praktisch.mat8")} <br />
              {t("praktisch.mat9")} <br />
              {t("praktisch.mat10")} <br />
              {t("praktisch.mat11")} <br /><nav></nav></div>
          <div className={smallScreen ?` ` :"col-span-2 pl-10"}>
              {t("praktisch.mat3")} <br />
              {t("praktisch.mat4")} <br />
              {t("praktisch.mat5")} <br />
              {t("praktisch.mat6")} <br />
              {t("praktisch.mat12")} <br /></div>
              <div className="col-span-2"> </div>
              <div className={smallScreen ?` pb-2 font-small` :"col-span-4 font-small pl-10"}> <br /><i>{t("praktisch.mat14")} </i></div>
              </div>
      </>
  );
};

export default Page;

"use client"

import React from "react";
import {useI18n} from "../../../../../translations/client";
import image from "@/public/81.jpg";
import Image from "next/image";
import {useWindowSize} from "@/lib/hooks/useWindowsize";

const Page = () => {
  const t = useI18n();

    const windowSize = useWindowSize();
    const smallScreen = windowSize.width! < 745;
  
  return (
    <>
      <div className={smallScreen ? `p-5` : "grid grid-cols-6 gap-4 m-10 pl-10"}>
       <div className="col-span-4 pt-10 pr-10">
         <p className="col-span-4 font-medium text-2xl mb-4">{t("neeltje.caption")} 🐚💛</p>
         <br />
          {t("neeltje.caption6")}<br /><br /> 
          {t("neeltje.caption1")}<br /><br />   
          {t("neeltje.caption2")}<br /> <br />  
          {t("neeltje.caption3")}<br /> <br />
          {t("neeltje.caption4")}<br /> <br />
          {t("neeltje.caption5")}<br /><br /><br />
          <i>
          <a
                        href={"http://www.mi-nemovement.nl/neeltje"}
                        target="_blank"
                        className={"opacity-70 hover:opacity-50"}
                    >
                      {t("neeltje.caption7")}
                    </a>
                  </i> 
          </div>
        <div className="col-span-2 pt-10">
          <Image width={900} height={1000} src={image} alt="My Image1"></Image>
          </div>
          </div>
    </>
  );
};

export default Page;

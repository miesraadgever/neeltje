"use client"

import React from "react";
import {useI18n} from "../../../../../translations/client";
import image from "@/public/infoplaatje.png";
import Image from "next/image";

const Page = () => {
  const t = useI18n();
  
  return (
      <>
        <div className="grid grid-cols-6 gap-4 m-10 pl-10">
          <div className="col-span-2 pt-10">
          <p className="col-span-2 font-medium text-2xl mb-4">{t("praktisch.kosten")}</p>
              {t("praktisch.kosten1")} <br /><br />
              </div>
          <div className="col-span-4 pl-10 pt-10">
          <Image width={900} height={1000} src={image} alt="My Image1"></Image>
          </div>
          <div className="col-span-2 font-medium text-2xl pt-10">{t("praktisch.voor")} </div>
          <div className="col-span-4 font-medium text-2xl pt-10 pl-10">{t("praktisch.mat")} </div>
          <div className="col-span-2 "> 
              {t("praktisch.voor1")} </div>
          <div className="col-span-4 pl-10"> {t("praktisch.mat1")} </div>
          <div className="col-span-2 "> {t("praktisch.voor2")} <br /> </div>
          <div className="col-span-2 pl-10"> 
              <i>{t("praktisch.mat2")}</i> <br />
              {t("praktisch.mat8")} <br />
              {t("praktisch.mat9")} <br />
              {t("praktisch.mat10")} <br />
              {t("praktisch.mat11")} <br /><nav></nav></div>
          <div className="col-span-2 pl-10">  
               <br />
              {t("praktisch.mat3")} <br />
              {t("praktisch.mat4")} <br />
              {t("praktisch.mat5")} <br />
              {t("praktisch.mat6")} <br />
              {t("praktisch.mat12")} <br /></div>
              <div className="col-span-2"> </div>
              <div className="col-span-4 font-small pl-10"> <br /><i>{t("praktisch.mat14")} </i></div>
              </div>
      </>
  );
};

export default Page;

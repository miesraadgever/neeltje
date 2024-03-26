"use client"

import React from "react";
import {useI18n} from "../../../../../translations/client";
import image from "@/public/2.jpg"
import Image from "next/image";

const Page = () => {
  const t = useI18n();
  
  return (
      <>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 col-span-2 mt-5 ml-9">
            <Image width={500} height={600} src={image} alt="My Image1"></Image></div>
          <div className="col-span-1 font-medium text-4xl pt-10">{t("praktisch.kosten")} 
              </div>
          <div className="row-span-2 col-span-1">
              {t("praktisch.kosten1")} <br /><br />
              {t("praktisch.kosten2")} <br /><br />
              {t("praktisch.kosten3")} <br />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4 m-10">
          <div className="col-span-2 font-medium text-4xl pt-10">{t("praktisch.voor")} </div>
          <div className="col-span-4 font-medium text-4xl pt-10 pl-10">{t("praktisch.mat")} </div>
          <div className="col-span-2 "> 
              {t("praktisch.voor1")} </div>
          <div className="col-span-4 pl-10"> {t("praktisch.mat1")} </div>
          <div className="col-span-2 "> {t("praktisch.voor2")} <br /> </div>
          <div className="col-span-2 pl-10"> 
              {t("praktisch.mat2")} <br /><br />
              {t("praktisch.mat8")} <br />
              {t("praktisch.mat9")} <br />
              {t("praktisch.mat10")} <br />
              {t("praktisch.mat11")} <br />
              {t("praktisch.mat12")} <br /></div>
          <div className="col-span-2 pl-10">  
              {t("praktisch.mat13")} <br /><br />
              {t("praktisch.mat6")} <br />
              {t("praktisch.mat4")} <br />
              {t("praktisch.mat5")} <br />
              {t("praktisch.mat7")} <br /></div>
              <div className="col-span-2"> </div>
              <div className="col-span-4 font-small pl-10"> <br /><i>{t("praktisch.mat14")} </i></div>
              </div>
      </>
  );
};

export default Page;

"use client"

import React from "react";
import Image from "next/image";
import {useI18n} from "../../../../../translations/client";

const Page = () => {
  const t = useI18n();
  
  return (
      <>
        <div className="grid grid-cols-6 gap-4 m-10">
          <div className="col-span-2">
            {t("lessen.caption")} <br /><br />
            {t("lessen.caption1")} <br /><br />
            {t("lessen.caption2")} <br /><br />
            {t("lessen.taal")} <br /><br /></div>
          <div className="col-span-4"> 
          <img src="./public/11.png" alt="My Image1"></img>
          </div>
          <div className="col-span-3 font-medium text-4xl pt-10">{t("lessen.title1")} </div>
          <div className="col-span-3 font-medium text-4xl pt-10">{t("lessen.title2")} </div>
          <div className="col-span-3 pr-10">
              {t("lessen.patroon")} <br /><br />
              {t("lessen.patroon1")} <br /><br />
              {t("lessen.patroon2")} <br /><br />  </div>
          <div className="col-span-3 pr-10">
             {t("lessen.vrij")} <br /><br />
             {t("lessen.vrij1")} <br /><br />
             {t("lessen.vrij2")} <br /><br /> 
             {t("lessen.vrij3")} <br /><br /></div>
          <div className="col-span-3 pt-10">
          <img src="./public/2.png" alt="My Image2"></img>
          </div>
          <div className="col-span-3 pt-10">
          <img src="./public/3.png" alt="My Image3"></img>
          </div>
          <div className="col-span-3 pt-10">
              <i>{t("lestijden.caption")} <br /><br />
              {t("lestijden.patroontijd")} <br />
              {t("lestijden.patroontijd1")} <br />
              {t("lestijden.patroontijd2")} <br /></i></div>
          <div className="col-span-3 pt-10">
             <i>{t("lestijden.caption1")} <br /><br />
             {t("lestijden.vrijtijd")} <br />
             {t("lestijden.vrijtijd2")} <br />
             {t("lestijden.vrijtijd3")} <br /></i></div>
        </div>
      
      </>
  )
};

export default Page;

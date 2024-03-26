"use client"

import React from "react";
import Image from "next/image";
import {useI18n} from "../../../../../translations/client";

const Page = () => {
  const t = useI18n();
  
  return (
      <>
        <div className="flex flex-row gap-10 col-12 m-10">
          <div className="flex col-4 ">
            {t("lessen.caption")} <br /><br />
            {t("lessen.caption1")} <br /><br />
          </div>
        </div>
        <div className="flex flex-row gap-10 col-12 m-10">
          <div>
            <p className="flex-row col-12 font-medium text-4xl mb-3 mt-10 pl-5">  {t("lestijden.patroon")}  </p>
            <p className="flex-row col-12 pl-5 ">
              {t("lestijden.patroon")} <br />
              {t("lestijden.caption")} <br /><br />
              {t("lestijden.patroontijd")} <br />
              {t("lestijden.patroontijd1")} <br />
              {t("lestijden.patroontijd2")} <br />
             </p>
          </div>
          <div>
            <p className="flex-row col-10 font-medium text-4xl mb-3 mt-10 pl-7"> {t("lestijden.vrij")}  </p>
              <p className="flex-row col-8 pl-7">
             {t("lestijden.vrij")} <br />
             {t("lestijden.caption1")} <br /><br />
             {t("lestijden.vrijtijd")} <br />
             {t("lestijden.vrijtijd2")} <br />
             {t("lestijden.vrijtijd3")} <br />
              </p>
          </div>
        </div>
      </>
  );
};

export default Page;

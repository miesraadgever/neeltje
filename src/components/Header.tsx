"use client";

import React from "react";
import Link from "next/link";
import { useCurrentLocale, useI18n } from "../../translations/client";
import LanguageSelector from "@/components/LanguageSelector";

const Header = () => {
  const locale = useCurrentLocale();
  const t = useI18n();

  return (
    <div className={"flex flex-row justify-between m-3"}>
      <div>
        <Link href={"/"} className={"hover:opacity-50"}>
          <span className={"text-md"}></span>
        </Link>
      </div>
      <div className={"flex flex-row gap-5 mr-5 text-md"}>
        <div>
          <Link href={"/"} className={"hover:opacity-50 align-middle"}>
            home
          </Link>
        </div>
        <div>
          <Link href={"/lessen"} className={"hover:opacity-50 align-middle"}>
            {t("homebutton.les")}
          </Link>
        </div>
        <div>
          <Link href={"/info"} className={"hover:opacity-50 align-middle"}>
           {t("homebutton.info")}   
          </Link>
        </div>
        <div>
          <Link href={"/over"} className={"hover:opacity-50 align-middle"}>
           {t("homebutton.over")}
          </Link>
        </div>
        <div>
          <Link href={"/contact"} className={"pt-5 hover:opacity-50 align-middle"}>
            contact
          </Link>
        </div>
          <LanguageSelector />
      </div>
    </div>
  );
};

export default Header;

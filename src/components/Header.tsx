"use client";

import React, {useState} from "react";
import Link from "next/link";
import { useCurrentLocale, useI18n } from "../../translations/client";
import LanguageSelector from "@/components/LanguageSelector";
import {useWindowSize} from "@/lib/hooks/useWindowsize";
import Hamburger from "hamburger-react";


const Header = () => {
  const locale = useCurrentLocale();
  const t = useI18n();

  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 745;
  const [isOpen, setOpen] = useState(false);


  return (
      <>
      {!smallScreen ? (
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
          ) : (
              <div>
                <div className={"flex flex-row justify-between m-3"}>
                  <div className={"mt-2"}>
                    <Link href={"/"} className={"hover:opacity-50"}>
                      <span className={"font-medium text-xl"}>naailes bij neeltje</span>
                    </Link>
                  </div>
                  <div className={""}>
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        size={20}
                        distance={"sm"}
                    />
                  </div>
                </div>
                {isOpen && (
                    <div className={"flex flex-wrap justify-center ml-0 p-3 mt-0 bg-gray-100 gap-4 absolute w-full"}>
                      <div>
                        <Link href={"/lessen"} className={"hover:opacity-50 "}>
                          {t("homebutton.les")}
                        </Link>
                      </div>
                      <div>
                        <Link href={"/info"} className={"hover:opacity-50"}>
                          {t("homebutton.info")}
                        </Link>
                      </div>
                      <div>
                        <Link href={"/over"} className={"hover:opacity-50 "}>
                          {t("homebutton.over")}
                        </Link>
                      </div>
                      <div>
                        <Link href={"/contact"} className={"pt-5 hover:opacity-50 "}>
                          contact
                        </Link>
                      </div>
                      <LanguageSelector />
                    </div>
                )}
              </div>
          )}
      </>
  );
};

export default Header;

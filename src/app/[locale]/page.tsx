"use client"

import { useCurrentLocale, useI18n } from "../../../translations/client";

export default function Home() {

  const t = useI18n();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t("home.titel")} <br /><br />
      {t("home.intro")} <br /><br />
      {t("home.kom")} <br /><br />
    </main>
  );
}

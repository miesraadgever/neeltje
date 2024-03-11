"use client"

import React from 'react';
import {useI18n} from "../../../../../translations/client";

const Page = () => {
    const t = useI18n()

    return (
        <div className={"flex min-h-screen flex-col items-center justify-between p-24"}>
            {t("contact.page")}
        </div>
    );
};

export default Page;
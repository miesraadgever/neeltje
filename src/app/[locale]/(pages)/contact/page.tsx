"use server";

import React from 'react';
import dynamic from "next/dynamic";

const Page = async () => {
    const Contact = dynamic(() => import("../../../../components/Contact"), {
        ssr: false,
    });

    return (
        <div className="flex justify-center items-center flex-col">
            <div className="min-w-[50%] max-h-[90%] mt-20">
                <Contact />
            </div>
        </div>
    );
};

export default Page;

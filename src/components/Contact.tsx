"use client";

import { useForm } from 'react-hook-form';
import { sendEmail } from '../../utils/send-email';
import {useCurrentLocale, useI18n} from "../../translations/client";
import ReCAPTCHA from "react-google-recaptcha";
import {RefObject, useEffect, useRef} from "react";

export type FormData = {
    name: string;
    email: string;
    message: string;
    captchaToken: string;
};

const Contact = () => {
    const { register, handleSubmit, setValue } = useForm<FormData>();
    const t = useI18n()
    const recaptcha: RefObject<ReCAPTCHA> = useRef(null);
    const language = useCurrentLocale();


    const onSubmit = async (data: FormData) => {
        // Perform reCAPTCHA validation before sending the email
        if (!data.captchaToken) {
            console.error('reCAPTCHA validation failed');
            return;
        }

        // If reCAPTCHA validation is successful, proceed to send the email
        await sendEmail(data);
    };

    const onCaptchaChange = (token: string | null) => {
        setValue('captchaToken', token || '');
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-5'>
                <label
                    htmlFor='name'
                    className='mb-3 block text-base font-medium text-black'
                >
                    <p>{t("contact.name")}</p>
                </label>
                <input
                    type='text'
                    placeholder={t("contact.name")}
                    className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-amber-800 focus:shadow-md'
                    {...register('name', { required: true })}
                />
            </div>
            <div className='mb-5'>
                <label
                    htmlFor='email'
                    className='mb-3 block text-base font-medium text-black'
                >
                    {t("contact.email")}
                </label>
                <input
                    type='email'
                    placeholder='example@domain.com'
                    className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-amber-800 focus:shadow-md'
                    {...register('email', { required: true })}
                />
            </div>
            <div className='mb-5'>
                <label
                    htmlFor='message'
                    className='mb-3 block text-base font-medium text-black'
                >
                    {t("contact.message")}
                </label>
                <textarea
                    rows={4}
                    placeholder= {t("contact.type")}
                    className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-amber-800 focus:shadow-md'
                    {...register('message', { required: true })}
                ></textarea>
            </div>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex align-baseline"}>
                    <button className='hover:shadow-form rounded-md bg-gray-400 py-3 px-8 text-base font-semibold text-white outline-none'>
                        {t("general.submit")}
                    </button>
                </div>
                <div className="">
                    <ReCAPTCHA
                        size="normal"
                        sitekey="6LfRfZYpAAAAAKa4lMdq0SsnlwQpHOn_aEGKmvSO"
                        onChange={onCaptchaChange}
                        ref={recaptcha}
                        hl={`${language === "nl" ? "nl" : "en-GB"}`}
                    />
                </div>
            </div>


        </form>
    );
};

export default Contact;
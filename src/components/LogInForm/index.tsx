'use client'

import { FormEvent, useState } from "react";
import React from "react";
import signIn, { SignInResponse } from "@/components/common/firebase/auth/signin";
import { cacheData } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import CustomButton from "../common/CustomButton";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

/**
 * This contain the login page
 * 
 *
 * @author Tariq Khodadin <khodadint@gmail.com>
 * @since 2024-06-19
 *
 * @returns {Login} Login component
 */

export default function LogInForm(): JSX.Element {
    const { setLoggedIn } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertShow, setAlertShow] = useState(false)
    const router = useRouter();
    const t = useTranslations("login")

    const handleForm = async (event: FormEvent): Promise<void> => {
        event.preventDefault();

        const { result, error }: SignInResponse = await signIn(email, password);

        if (error) {
            handleAlert()
            console.log(error);
            return;
        }
        cacheData(result.user, "login");
        setLoggedIn(true)
        router.push('/');

    };

    const handleAlert = () => {
        setAlertShow(true)
    };
    return (

        <form onSubmit={handleForm} className="form space-y-6 bg-white p-8 rounded-lg shadow-md w-1/4 max-w-md mx-auto shadow-black font-primary-bold">
            <label htmlFor="email" className="block">
                <p className="text-gray-700 font-medium mb-2">{t("email")}</p>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@mail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </label>
            <label htmlFor="password" className="block">
                <p className="text-gray-700 font-medium mb-2">{t("password")}</p>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </label>
            <button
                type="submit"
            >
                <CustomButton text={t("signin")}/>
            </button>
            <Link href="signup" className="flex w-full justify-end">
                <p className="underline hover:text-bubblegum text-black font-primary-light mt-2">{t("signup")}</p>
            </Link>
            <div
            className={`bg-orange-200 w-full rounded-md h-20 border-2 border-orange-700 flex items-center text-orange-700 pl-2 gap-2 text-sm 
            ${alertShow ? `` : `hidden`}`}>
                <ExclamationCircleIcon className="h-8 w-8"/>
                <p>{t("incorrect-credentials")}</p>
            </div>
        </form>
    );

}

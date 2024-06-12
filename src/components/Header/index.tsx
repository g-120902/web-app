import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import Ornament from "./Ornament";
import Title from "./Title";

/**
 * The Header component is a React component that renders the header of the booking application.
 * It contains the logo and the navigation menu.
 *
 * @author Valentin magde <valentinmagde@gmail.com>
 * @since 2023-01-18
 *
 * @returns {JSX.Element} Header component
 */
export default function Header(): JSX.Element {

    return (
        <>
            <div className="flex flex-col">
                <div
                className="h-24 flex items-center text-white bg-gray-800
                text-center px-2 sm:px-4 md:px-6 lg:px-8 text-gray-2 gap-7">


                    <div className="flex-1 hidden sm:flex justify-center">
                        <Title title="title" />
                    </div>
                    <div className="flex-1 sm:flex justify-end hidden items-center gap-3">

                        <LanguageSwitcher />

                    </div>
                    <Ornament />
                </div>
            </div>
        </>
    );
}

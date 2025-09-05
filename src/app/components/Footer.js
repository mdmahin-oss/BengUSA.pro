import Image from "next/image";
import {EnvelopeIcon} from "@heroicons/react/24/solid";
import Logo from "@/app/components/Logo";

export default function Footer() {
    return (
        <footer className="bg-[var(--blue)] text-white p-[24px] px-[24px] md:px-[60px] text-center flex flex-col">
            <div className="flex flex-col md:flex-row justify-between mb-[16px]">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <Logo width={220} showBackground={true}/>
                    </div>
                    <div className="flex flex-row mt-[8px] gap-2 items-center">
                        <EnvelopeIcon className="w-[24px] h-[24px] ml-[0px] text-[var(--green)]" />
                        <a href="mailto:bengusa.pro@mail.com" className="font-[100]">bengusa.pro@mail.com</a>
                    </div>
                </div>
                <div className="flex flex-col items-start pt-[8px] md:items-end font-[200]">
                    <p>112, North Hall</p>
                    <p>Burner Hill</p>
                    <p>New Jersey</p>
                    <p>Post Code - NX9980</p>
                </div>
            </div>
            <p className="font-[200]">bengUSA.pro &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </footer>
    )
}
"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Bars4Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
import {useState} from "react";

export default function Logo({vertical = false, onlyLogo = false, width = 16, showBackground = false}) {
    const logoClass = `flex ${showBackground?'bg-white p-2 rounded-[8px]':''}`;
    const imageClass = {
        height: 'auto',
        width: `${width}px`
    };
    // Hooks
    const [menuOpen, setMenuOpen] = useState(false)

    // Variables
    const linkClass = "px-[12px]";
    const activeLinkClass = "text-[var(--green)] md:text-[var(--white)] underline";

    // Checking paths
    const pathname = usePathname();

    // Path Arrays
    const paths = [
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "About Us",
            "path": "/about-us"
        },
        {
            "name": "Our Work",
            "path": "/our-work"
        },
        {
            "name": "Contact Us",
            "path": "/contact-us"
        }
    ]

    return (
        <div className={logoClass}>
            {
                onlyLogo?(
                    <img style={imageClass} src={`/images/svg/bengusaicon.svg`} alt="bengusa_logo"/>
                ):vertical?(
                    <img style={imageClass} src={`/images/svg/bengusaicon_ver.svg`} alt="bengusa_logo"/>
                ):(
                    <img style={imageClass} src={`/images/svg/bengusaicon_hor.svg`} alt="bengusa_logo"/>
                )
            }

        </div>
    )
}
import {Oswald, Roboto, Playwrite_AU_SA, Lexend} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const oswaldSans = Oswald({
    variable: "--font-oswald",
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ["latin"],
});

const robotoSans = Roboto({
    variable: "--font-roboto",
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
});

const lexendSans = Lexend({
    variable: "--font-lexend",
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ["latin"],
});

const playwriteSans = Playwrite_AU_SA({
    variable: "--font-playwrite",
    weight: ['100', '200', '300', '400'],
    subsets: ["latin"],
});

export const metadata = {
    title: "bengUSA.pro",
    description: "A portfolio website for featuring company named bengUSA.pro",
    icons: {
        icon: '/images/svg/bengusaicon.svg'
    }
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${oswaldSans.variable} ${robotoSans.variable} ${playwriteSans.variable} ${lexendSans.variable} antialiased`}
        >
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}

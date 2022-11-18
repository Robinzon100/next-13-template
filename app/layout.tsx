import "@/styles/main.scss";
import { ReactNode } from "react";
import localFont from '@next/font/local';
import HeadAndMeta from "components/global/head/HeadAndMeta";
import Navigation from "components/global/navigation/Navigation";


const generalSans = localFont({
    src: [
        { path: './(fonts)/general_sans/GeneralSans-Variable.woff2' },
    ],
    variable: '--general-sans'
});

const switzer = localFont({
    src: [
        { path: './(fonts)/switzer/Switzer-Variable.woff2' },
    ],
    variable: '--switzer'
});




const RootLayout = ({ children }: { children: ReactNode; }) => {
    return (
        <html lang="en" className={`${generalSans.variable} ${switzer.variable}`}>
            <HeadAndMeta
                title="Leanhire"
                description="Leanhire"
                favIconImagePath="..."
                baseUrl="..."
                ogTitle="🔵 Leanhire"
                ogDescription="Leanhire"
                ogImagePath="..."
            />
            <body>
                <Navigation />
                <div className="main_main">
                    {children}
                </div>
            </body>
        </html>
    );
};

export default RootLayout;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ChatWidgetButton } from "@/components/chat-widget-button";
import ConsentAnalytics from "@/components/consent-analytics";

import { DATA } from "@/data/resume";

import { cn } from "@/lib/utils";

import "./globals.css";

const GTM_ID = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_GTM_ID : undefined;
// Google Consent Mode (read by Tag Manager): analytics storage stays denied unless the visitor already accepted.
const CONSENT_DEFAULT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}var g="denied";try{if(localStorage.getItem("analytics-consent")==="granted")g="granted"}catch(e){}gtag("consent","default",{analytics_storage:g,ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied"});`;
// Standard Tag Manager snippet, written literally so it is in the served HTML.
const gtmSnippet = (id: string) =>
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`;
const SITE_NAME = "JealousGx";
const HOME_TITLE = "Freelance Web Developer for Startups and Small Businesses | JealousGx";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL(DATA.url),
    title: {
        default: HOME_TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: DATA.description,
    openGraph: {
        title: HOME_TITLE,
        description: DATA.description,
        url: DATA.url,
        siteName: SITE_NAME,
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: HOME_TITLE,
        card: "summary_large_image",
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="me" href="https://mastodon.social/@jealousgx" />
                {GTM_ID && (
                    <>
                        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
                        <script dangerouslySetInnerHTML={{ __html: gtmSnippet(GTM_ID) }} />
                    </>
                )}
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased relative",
                    geist.variable,
                    geistMono.variable
                )}
            >
                {GTM_ID && (
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                        />
                    </noscript>
                )}
                {children}
                <ChatWidgetButton />
                {GTM_ID && <ConsentAnalytics />}
            </body>
        </html>
    );
}

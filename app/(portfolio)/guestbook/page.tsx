import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import GuestbookClient from "./client";

export const metadata: Metadata = {
    title: "Guestbook",
    description: "Leave a message on my portfolio guestbook.",
    alternates: { canonical: `${DATA.url}/guestbook` },
    openGraph: { title: "Guestbook | JealousGx", description: "Leave a message on my portfolio guestbook.", url: `${DATA.url}/guestbook`, siteName: "JealousGx", type: "website" },
};

export default function GuestbookPage() {
    return <GuestbookClient />;
}
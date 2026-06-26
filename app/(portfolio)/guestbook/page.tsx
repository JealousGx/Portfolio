import type { Metadata } from "next";
import GuestbookClient from "./client";

export const metadata: Metadata = {
    title: "Guestbook",
    description: "Leave a message on my portfolio guestbook.",
};

export default function GuestbookPage() {
    return <GuestbookClient />;
}
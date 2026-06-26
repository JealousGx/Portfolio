
import { readFileSync } from "fs";
import path from "path";

import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";

export const alt = "Blog";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

const cabinetGrotesk = readFileSync(path.join(process.cwd(), "public/fonts/CabinetGrotesk-Medium.ttf"));
const clashDisplay = readFileSync(path.join(process.cwd(), "public/fonts/ClashDisplay-Semibold.ttf"));
const avatarPng = `data:image/png;base64,${readFileSync(path.join(process.cwd(), "public/me.png")).toString("base64")}`;

const styles = {
    outerWrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        position: "relative",
    },
    middleWrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        position: "relative",
        padding: "40px",
    },
    wrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fafafa",
        position: "relative",
        padding: "40px",
        border: "1px solid #e5e5e5",
        borderRadius: "12px",
    },
    imageSection: {
        position: "absolute",
        top: "40px",
        left: "40px",
        display: "flex",
        alignItems: "center",
        zIndex: "2",
    },
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        height: "100%",
        width: "100%",
        position: "relative",
        zIndex: "1",
    },
    image: {
        width: "140px",
        height: "140px",
        borderRadius: "24px",
        border: "4px solid #e5e5e5",
        objectFit: "cover",
    },
    title: {
        fontFamily: "Clash Display",
        fontSize: "48px",
        fontWeight: "600",
        lineHeight: "1.1",
        textAlign: "left",
        color: "#000000",
        marginBottom: "16px",
        letterSpacing: "-0.02em",
        maxWidth: "900px",
    },
    description: {
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "1.5",
        textAlign: "left",
        maxWidth: "800px",
        color: "#404040",
        marginBottom: "32px",
        textWrap: "balance",
    },
} as const;

export default async function Image() {
    const title = "Blog";
    const description = "Thoughts on software development, life, and more.";
    const imageUrl = avatarPng;

    return new ImageResponse(
        (
            <div style={styles.outerWrapper}>
                <div style={styles.middleWrapper}>
                    <div style={styles.wrapper}>
                        {imageUrl && (
                            <div style={styles.imageSection}>
                                <img src={imageUrl} alt="Blog" width={140} height={140} style={styles.image} />
                            </div>
                        )}
                        <div style={styles.mainContainer}>
                            <div style={styles.title}>{title}</div>
                            {description && (
                                <div style={styles.description}>{description}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "Cabinet Grotesk",
                    data: cabinetGrotesk,
                    weight: 400,
                    style: "normal",
                },
                {
                    name: "Cabinet Grotesk",
                    data: cabinetGrotesk,
                    weight: 700,
                    style: "normal",
                },
                {
                    name: "Clash Display",
                    data: clashDisplay,
                    weight: 600,
                    style: "normal",
                },
            ],
        }
    );
}


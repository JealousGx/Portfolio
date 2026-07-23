import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { DATA } from "@/data/resume";

export function AuthorBio() {
    return (
        <div className="flex items-center gap-4 rounded-xl border border-border p-6">
            <Avatar className="size-12 border rounded-full shadow ring-2 ring-border flex-none">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
                <p className="font-semibold leading-none">{DATA.name}</p>
                <p className="text-sm text-muted-foreground">Freelance Full Stack Developer, JealousGx</p>
                <div className="flex gap-3 mt-1">
                    <Link
                        href={DATA.contact.social.GitHub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        GitHub
                    </Link>
                    <Link
                        href={DATA.contact.social.LinkedIn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        href={DATA.contact.social.X.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        X
                    </Link>
                    <Link
                        href={DATA.contact.social.Instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Instagram
                    </Link>
                </div>
            </div>
        </div>
    );
}

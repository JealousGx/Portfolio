import { Code, Globe, Layout, ShoppingCart } from "lucide-react";

import { DATA } from "@/data/resume";

const iconMap = {
    globe: Globe,
    shoppingCart: ShoppingCart,
    code: Code,
    layout: Layout,
} as const;

export default function ServicesSection() {
    return (
        <div className="flex min-h-0 flex-col gap-y-8">
            <div className="flex flex-col gap-y-4 items-center justify-center">
                <div className="flex items-center w-full">
                    <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                    <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                        <span className="text-background text-sm font-medium">Services</span>
                    </div>
                    <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                </div>
                <div className="flex flex-col gap-y-3 items-center justify-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What I can build for you</h2>
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                        From simple business sites to full web apps — I build what you need.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
                {DATA.services.map((service) => {
                    const Icon = iconMap[service.icon as keyof typeof iconMap];
                    const mailtoSubject = encodeURIComponent(`I need a ${service.title}`);
                    return (
                        <div
                            key={service.title}
                            className="flex flex-col gap-4 p-6 border border-border rounded-xl bg-background hover:ring-2 hover:ring-muted transition-all duration-200"
                        >
                            <div className="flex items-center gap-3">
                                {Icon && <Icon className="size-5 text-muted-foreground" />}
                                <h3 className="font-semibold">{service.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{service.description}</p>
                            <a
                                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${mailtoSubject}`}
                                className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border border-border rounded-lg hover:bg-accent transition-colors w-fit"
                            >
                                {service.cta}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

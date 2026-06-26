import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

export default function TestimonialsSection() {
    return (
        <div className="flex min-h-0 flex-col gap-y-8">
            <div className="flex flex-col gap-y-4 items-center justify-center">
                <div className="flex items-center w-full">
                    <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                    <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                        <span className="text-background text-sm font-medium">Testimonials</span>
                    </div>
                    <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                </div>
                <div className="flex flex-col gap-y-3 items-center justify-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What clients say</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-[800px] mx-auto w-full">
                {DATA.testimonials.map((testimonial) => (
                    <div
                        key={testimonial.name}
                        className="flex flex-col justify-between gap-4 p-6 border border-border rounded-xl bg-background"
                    >
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            &ldquo;{testimonial.body}&rdquo;
                        </p>
                        <div className="flex items-center gap-3">
                            <Avatar className="size-8">
                                <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium leading-none">{testimonial.name}</span>
                                <span className="text-xs text-muted-foreground mt-0.5">{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

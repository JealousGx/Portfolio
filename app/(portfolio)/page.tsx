import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Markdown from "react-markdown";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import ContactSection from "@/components/section/contact-section";
import FeaturedBlogSection from "@/components/section/featured-blog-section";
import ProjectsSection from "@/components/section/projects-section";
import ServicesSection from "@/components/section/services-section";
import TestimonialsSection from "@/components/section/testimonials-section";
import WorkSection from "@/components/section/work-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { DATA } from "@/data/resume";

import { BUSINESS_ID, PERSON_ID, SOCIAL_IMAGE, WEBSITE_ID } from "@/lib/schema";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

const HOME_TITLE = "Freelance Web Developer for Startups and Small Businesses | JealousGx";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  alternates: { canonical: "/" },
  openGraph: { title: HOME_TITLE, url: "/", siteName: "JealousGx", locale: "en_US", type: "website", images: [SOCIAL_IMAGE] },
  twitter: { title: HOME_TITLE, images: [SOCIAL_IMAGE.url] },
};

const homeJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: DATA.url,
      name: "JealousGx",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: DATA.name,
      url: DATA.url,
      image: `${DATA.url}/me.webp`,
      jobTitle: "Full Stack Web Developer",
      description: DATA.description,
      email: DATA.contact.email,
      sameAs: [
        DATA.contact.social.GitHub.url,
        DATA.contact.social.LinkedIn.url,
        DATA.contact.social.X.url,
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "WordPress",
        "Docker",
        "Full Stack Web Development",
        "SaaS Development",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: "JealousGx",
      url: DATA.url,
      areaServed: "Worldwide",
      founder: { "@id": PERSON_ID },
    },
    {
      "@type": "ItemList",
      name: "Web Development Services by Abdul Mateen Khilji",
      url: DATA.url,
      itemListElement: DATA.services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": BUSINESS_ID },
          areaServed: "Worldwide",
          serviceType: "Web Development",
        },
      })),
    },
  ],
}).replace(/</g, "\\u003c");

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: homeJsonLd }}
      />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                as="h1"
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text="I build websites, MVPs, and web apps that help businesses grow"
              />
              <BlurFadeText
                className="text-lg font-medium md:text-xl"
                delay={BLUR_FADE_DELAY}
                text="Freelance full stack developer for startups and small businesses."
              />
              <BlurFadeText
                className="text-muted-foreground max-w-150 md:text-lg"
                delay={BLUR_FADE_DELAY}
                text={DATA.heroDescription}
              />
              <BlurFade delay={BLUR_FADE_DELAY} className="mt-2">
                <Link
                  href={DATA.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium border border-border rounded-lg hover:bg-accent transition-colors bg-background"
                >
                  Book a free scoping call
                </Link>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 flex flex-col items-start md:items-center gap-2 md:w-32">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
              <p className="text-xs text-muted-foreground md:text-center">
                {`Hi, I'm ${DATA.name}, a full stack developer.`}
              </p>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
            <p className="text-muted-foreground">
              The tools I use to get this done. Not technical? Don&apos;t worry about this part, I&apos;ll explain what you need on the call.
            </p>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => {
              const chipClassName =
                "border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2";
              const content = (
                <>
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </>
              );

              return (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  {"href" in skill && skill.href ? (
                    <Link href={skill.href} className={cn(chipClassName, "hover:ring-2 hover:ring-muted transition-all")}>
                      {content}
                    </Link>
                  ) : (
                    <div className={chipClassName}>{content}</div>
                  )}
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
      <section id="services">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ServicesSection />
        </BlurFade>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <ProjectsSection projects={DATA.featuredProjects} showViewAll />
        </BlurFade>
      </section>
      <section id="blog">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <FeaturedBlogSection />
        </BlurFade>
      </section>
      <section id="testimonials">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <TestimonialsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}

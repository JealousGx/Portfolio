import Socials from "@/components/Shared/Socials";
import NextImage from "next/image";
import Link from "next/link";

import AvatarJPG from "public/static/images/avatar.webp";


const Hero = ()  => {
  return (
    <div className="flex flex-col-reverse sm:mb-16 md:my-16 md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Abdul Mateen Khilji
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-600 will-change-transform dark:text-gray-400">
          Software Engineer • Gamer • Tech Enthusiast
        </h2>
        <p className="text-md will-change-opacity text-lg text-black will-change-transform dark:text-gray-300">
          Hello, I'm a highly skilled full stack web developer with almost 3+
          years of professional experience with a rich background in creating
          and maintaining dynamic websites.
        </p>
        <div className="!mt-8 flex max-w-[14rem] flex-col gap-4 sm:max-w-full sm:flex-row">
          <button className="rounded-lg border-[1px] border-gray-300 bg-gray-50 px-4 py-2 capitalize hover:border-gray-200 dark:border-tertiary dark:bg-secondary dark:hover:border-accent">
            <a href={process.env.NEXT_PUBLIC_RESUME_LINK} target="_blank" rel="noreferrer">
              download resume
            </a>
          </button>
          <button className="rounded-lg border-[1px] border-gray-300 bg-gray-50 px-4 py-2 capitalize hover:border-gray-200 dark:border-tertiary dark:bg-secondary dark:hover:border-accent">
            <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
              contact me
            </Link>
          </button>
        </div>
        <Socials className="!mt-8" />
      </div>
      <div className="will-change-opacity relative h-48 w-48 overflow-hidden rounded-full will-change-transform">
        <NextImage
          src={AvatarJPG}
          placeholder="blur"
          alt="Abdul Mateen Khilji"
        />
      </div>
    </div>
  );
};

export default Hero;

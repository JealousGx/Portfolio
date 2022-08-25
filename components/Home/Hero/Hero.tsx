import NextImage from "next/image";
import Link from "next/link";
import Socials from "@/components/Shared/Socials";
import AvatarJPG from "public/static/images/avatar.jpeg";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse sm:mb-16 md:my-16 md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Abdul Mateen Khilji
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-600 will-change-transform dark:text-gray-400">
          Final Year Engineering Student • Front End Web Developer • Gamer •
          Tech Enthusiast
        </h2>
        <p className="text-md will-change-opacity text-lg text-black will-change-transform dark:text-gray-300">
          I am a final year student, a frontend web developer, currently working
          on full stack web development. I like to play soccer, badminton and
          video games.
        </p>
        <div className="!mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-lg border-[1px] border-gray-300 bg-gray-50 px-4 py-2 capitalize hover:border-gray-200 dark:border-tertiary dark:bg-secondary dark:hover:border-accent">
            download resume
          </button>
          <button className="rounded-lg border-[1px] border-gray-300 bg-gray-50 px-4 py-2 capitalize hover:border-gray-200 dark:border-tertiary dark:bg-secondary dark:hover:border-accent">
            <Link
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="rounded-lg border-[1px] border-gray-300 bg-gray-50 px-4 py-2 capitalize hover:border-gray-200 dark:border-tertiary dark:bg-secondary dark:hover:border-accent"
            >
              contact me
            </Link>
          </button>
        </div>
        <Socials className="!mt-8" />
      </div>
      <div className="will-change-opacity relative h-48 w-48 overflow-hidden rounded-full will-change-transform">
        <NextImage
          src={AvatarJPG}
          layout="fill"
          placeholder="blur"
          alt="Abdul Mateen Khilji"
        />
      </div>
    </div>
  );
};

export default Hero;

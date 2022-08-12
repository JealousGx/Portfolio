import Socials from "@/components/Shared/Socials";
import NextImage from "next/image";
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
        <Socials className="!mt-12" />
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

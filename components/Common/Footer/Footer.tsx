import Link from "@/components/Shared/Link";
import Socials from "@/components/Shared/Socials";

const Footer = (): JSX.Element => {
  return (
    <footer className="mx-auto mb-16 flex max-w-3xl flex-col items-center space-y-4 px-8 text-center">
      <Socials small className="mb-8" />
      <p>
        Made by{" "}
        <Link href="https://github.com/JealousGx">JealousGx | Matt</Link>
      </p>
    </footer>
  );
};

export default Footer;

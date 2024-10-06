import { ReactNode } from "react";

import {
  GitHubIcon,
  LinkedInLogo,
  MediumLogo,
  Twitterlogo,
} from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "x",
    name: "X",
    url: "https://x.com/KhiljiMateenn",
    icon: <Twitterlogo />,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/JealousGx",
    icon: <GitHubIcon fill="#000" />,
  },
  {
    id: "medium",
    name: "Medium",
    url: "https://medium.com/@JealousGx",
    icon: <MediumLogo color="#fff" />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdul-mateen-khilji-8a743217b/",
    icon: <LinkedInLogo />,
  },
];

export default socials;

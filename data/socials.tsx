import { ReactNode } from "react";

import {
  DevToLogo,
  GitHubLogo,
  HashnodeLogo,
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
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/JealousGx",
    icon: <Twitterlogo color="#1DA1F2" />,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/JealousGx",
    icon: <GitHubLogo />,
  },
  {
    id: "hashnode",
    name: "Hashnode",
    url: "https://hashnode.com/@JealousGx",
    icon: <HashnodeLogo color="#2962ff" />,
  },
  {
    id: "dev.to",
    name: "Dev.to",
    url: "https://dev.to/JealousGx",
    icon: <DevToLogo color="#f0f0f0" />,
  },
];

export default socials;

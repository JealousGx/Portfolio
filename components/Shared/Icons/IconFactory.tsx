import { SVGProps } from "react";
import { X } from "react-feather";

import {
  NextJSLogo,
  TypescriptLogo,
  OttoLogo,
  ReactLogo,
  FigmaLogo,
  GoLogo,
  TailwindCSSLogo,
  ExpenseTrackerLogo,
  PhoneStoreLogo,
  NewsLogo,
  SunLogo,
  MoonLogo,
} from ".";
import CovidLogo from "./Covid19";

interface IconFactoryProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const IconFactory = ({
  name,
  ...otherProps
}: IconFactoryProps): JSX.Element => {
  switch (name) {
    case "nextjs":
      return <NextJSLogo {...otherProps} />;
    case "typescript":
      return <TypescriptLogo {...otherProps} />;
    case "ottoLogo":
      return <OttoLogo {...otherProps} />;
    case "figma":
      return <FigmaLogo {...otherProps} />;
    case "tailwindcss":
      return <TailwindCSSLogo {...otherProps} />;
    case "go":
      return <GoLogo {...otherProps} />;
    case "react":
      return <ReactLogo {...otherProps} />;
    case "news":
      return <NewsLogo {...otherProps} />;
    case "expenseTracker":
      return <ExpenseTrackerLogo {...otherProps} />;
    case "covid19":
      return <CovidLogo {...otherProps} />;
    case "phoneStore":
      return <PhoneStoreLogo {...otherProps} />;
    case "dark":
      return <MoonLogo {...otherProps} />;
    case "light":
      return <SunLogo {...otherProps} />;
    default:
      return <X />;
  }
};

export default IconFactory;

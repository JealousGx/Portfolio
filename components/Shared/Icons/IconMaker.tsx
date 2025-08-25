import { PropsWithoutRef, type JSX } from "react";

interface IconMakerProps extends PropsWithoutRef<JSX.IntrinsicElements["div"]> {
  svgCode: string;
}

const IconMaker = ({ svgCode, ...otherProps }: IconMakerProps)  => {
  return <div dangerouslySetInnerHTML={{ __html: svgCode }} {...otherProps} />;
};

export default IconMaker;

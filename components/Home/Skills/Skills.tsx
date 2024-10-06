import React, { useEffect, useRef } from "react";

interface Skill {
  id: string;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Skills = ({ skills }: { skills: Skill[] }) => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      const ul = skillsRef.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      if (ul.nextSibling) {
        (ul.nextSibling as HTMLElement).setAttribute("aria-hidden", "true");
      }
    }
  }, []);

  return (
    <div className="my-2 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div
        ref={skillsRef}
        className="flex items-center justify-center md:justify-start [&_svg]:mx-8 [&_svg]:max-w-none animate-infinite-scroll"
      >
        {skills.map(({ id, Icon }, index) => (
          <Icon
            key={`${id}-${index}`}
            className="w-32 h-24 filter grayscale opacity-65 dark:opacity-100 dark:fill-white"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

import { technologies } from "../../constants";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { BallCanvas } from "../canvas";

const Tech = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.skills} />

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="h-28 w-28"
            key={technology.name}
            role="img"
            aria-label={`${technology.name} technology icon`}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

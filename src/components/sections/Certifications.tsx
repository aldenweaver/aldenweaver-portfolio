import { motion } from "framer-motion";

import { testimonials as certifications } from "../../constants";
import { config } from "../../constants/config";
import { styles } from "../../constants/styles";
import { TCertifications } from "../../types";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";

const CertificationCard: React.FC<{ index: number } & TCertifications> = ({
  index,
  certification,
  organization,
  year,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <p className="text-[30px] font-black text-white">{certification}</p>

    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white">{organization}</p>

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            {year}
          </p>
        </div>

        <img
          src={image}
          alt={`Certification for ${certification}`}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.certifications} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.certification} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;

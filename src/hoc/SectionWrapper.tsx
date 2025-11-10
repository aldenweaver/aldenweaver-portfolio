import { motion } from "framer-motion";

import { styles } from "../constants/styles";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    // Generate readable aria-label from idName (e.g., "about" -> "About section")
    const ariaLabel = `${idName.charAt(0).toUpperCase() + idName.slice(1)} section`;

    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -200px 0px" }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
        id={idName}
        aria-label={ariaLabel}
      >
        <span className="hash-span">&nbsp;</span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;

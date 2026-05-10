import { motion } from "framer-motion";

const AlertBanner = () => {
  return (
    <motion.div
      animate={{
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="
        bg-red-600/10
        border-b
        border-red-900
        py-3
        text-center
        text-sm
        tracking-[4px]
        text-red-400
      "
    >
      ● TACTICAL AI SYSTEMS ACTIVE ● PROFESSOR ONLINE ● COMMERCE INTELLIGENCE OPERATIONAL
    </motion.div>
  );
};

export default AlertBanner;
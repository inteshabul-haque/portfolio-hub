import { motion } from "framer-motion";

const DaliMaskHero = () => {
  return (
    <div className="relative flex justify-center items-center">

      {/* Outer Glow */}
      <div
        className="
          absolute
          w-[350px]
          h-[350px]
          rounded-full
          bg-red-600/20
          blur-[120px]
        "
      />

      {/* Rotating Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[320px]
          h-[320px]
          rounded-full
          border
          border-red-900
        "
      />

      {/* Inner Ring */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[260px]
          h-[260px]
          rounded-full
          border
          border-red-700/50
        "
      />

      {/* Dali Mask Emoji */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          relative
          z-10
          text-[120px]
          drop-shadow-[0_0_40px_rgba(255,0,60,0.7)]
        "
      >
        🎭
      </motion.div>

    </div>
  );
};

export default DaliMaskHero;
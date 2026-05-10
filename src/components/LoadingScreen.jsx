import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 1.5,
        delay: 2.5,
      }}
      className="
        fixed
        inset-0
        z-[9999]
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
        pointer-events-none
      "
    >

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-red-600/20 blur-[180px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 text-center">

        {/* Main Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-5xl
            md:text-7xl
            font-black
            text-red-500
            tracking-[5px]
          "
        >
          THE PROFESSOR'S AI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="
            mt-6
            text-gray-400
            uppercase
            tracking-[6px]
            text-sm
          "
        >
          Initializing Tactical Intelligence...
        </motion.p>

        {/* Loading Bar */}
        <div
          className="
            mt-10
            w-[320px]
            h-[4px]
            bg-[#111]
            rounded-full
            overflow-hidden
            mx-auto
          "
        >

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
            }}
            className="
              h-full
              bg-red-500
              shadow-[0_0_20px_red]
            "
          />

        </div>

      </div>

    </motion.div>
  );
};

export default LoadingScreen;
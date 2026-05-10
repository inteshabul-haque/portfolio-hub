import { motion } from "framer-motion";
import Particles from "./Particles";
import DaliMaskHero from "./DaliMaskHero";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-[100vh]
        flex
        flex-col
        justify-center
        items-center
        text-center
        overflow-hidden
        bg-black
        px-6
      "
    >

      {/* Particles */}
      <Particles />

      {/* Tactical Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-20
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,60,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,60,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Red Glow */}
      <div className="absolute w-[600px] h-[600px] bg-red-600/20 blur-[160px] rounded-full top-10" />

      {/* Dali Mask */}
      <div className="mb-14 relative z-10">
        <DaliMaskHero />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative
          z-10
          text-5xl
          md:text-8xl
          font-black
          uppercase
          tracking-wide
          leading-tight
          text-white
        "
      >
        THE PROFESSOR'S

        <span
          className="
            block
            text-red-500
            mt-3
            drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]
          "
        >
          AI COMMAND CENTER
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="
          relative
          z-10
          mt-8
          text-gray-400
          text-lg
          md:text-2xl
          tracking-[4px]
          max-w-4xl
        "
      >
        AI-POWERED COMMERCE INTELLIGENCE,
        EXPERIMENTATION SYSTEMS,
        AND TACTICAL ANALYTICS PLATFORMS
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="
          relative
          z-10
          flex
          gap-5
          mt-12
          flex-wrap
          justify-center
        "
      >

        <button
          className="
            bg-red-600
            hover:bg-red-700
            hover:scale-105
            transition
            duration-300
            px-8
            py-4
            rounded-xl
            font-semibold
            shadow-[0_0_30px_rgba(255,0,60,0.5)]
          "
        >
          Launch Agents
        </button>

        <button
          className="
            border
            border-red-500
            hover:bg-red-950
            hover:scale-105
            transition
            duration-300
            px-8
            py-4
            rounded-xl
            font-semibold
          "
        >
          Enter Command Center
        </button>

      </motion.div>

    </section>
  );
};

export default Hero;
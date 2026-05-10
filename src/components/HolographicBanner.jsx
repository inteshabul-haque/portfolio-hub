import { motion } from "framer-motion";

const HolographicBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-red-900
          p-14
          text-center
          shadow-[0_0_50px_rgba(255,0,60,0.12)]
        "
        style={{
          background:
            "linear-gradient(120deg, rgba(255,0,60,0.08), rgba(255,0,60,0.02), rgba(255,0,60,0.08))",
          backgroundSize: "200% 200%",
        }}
      >

        {/* Glow */}
        <div className="absolute inset-0 bg-red-600/5 blur-[120px]" />

        <div className="relative z-10">

          <p className="text-red-500 tracking-[5px] uppercase text-sm mb-5">
            AI Startup Ecosystem
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-black
              uppercase
              leading-tight
            "
          >
            BUILT FOR
            <span className="block text-red-500">
              AI COMMERCE
            </span>
          </h2>

          <p
            className="
              max-w-3xl
              mx-auto
              mt-8
              text-gray-400
              leading-relaxed
              text-lg
            "
          >
            Tactical AI systems engineered for experimentation,
            commerce intelligence, optimization automation,
            and conversational analytics workflows.
          </p>

        </div>

      </motion.div>

    </section>
  );
};

export default HolographicBanner;
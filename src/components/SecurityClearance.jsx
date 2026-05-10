import { motion } from "framer-motion";

const SecurityClearance = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

        className="
          relative
          overflow-hidden
          border
          border-red-900
          rounded-3xl
          p-12
          bg-[#080808]
          shadow-[0_0_50px_rgba(255,0,60,0.12)]
        "
      >

        {/* Glow */}
        <div className="absolute inset-0 bg-red-600/5 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 text-center">

          <p className="text-red-500 tracking-[5px] uppercase text-sm mb-5">
            Access Authorization
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
            SECURITY
            <span className="block text-red-500">
              CLEARANCE
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
            Tactical AI systems engineered for advanced
            experimentation, commerce intelligence,
            conversational analytics,
            and enterprise-grade deployment workflows.
          </p>

          {/* Status Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">

            {[
              "AI SYSTEMS ACTIVE",
              "DEPLOYMENT READY",
              "TACTICAL MONITORING",
              "COMMERCE INTELLIGENCE",
            ].map((item, index) => (

              <div
                key={index}

                className="
                  px-6
                  py-3
                  rounded-full
                  border
                  border-red-900
                  bg-black
                  text-red-400
                  tracking-widest
                  text-sm
                "
              >
                ● {item}
              </div>

            ))}

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default SecurityClearance;
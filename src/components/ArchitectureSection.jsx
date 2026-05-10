import { motion } from "framer-motion";

const ArchitectureSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      {/* Heading */}
      <div className="text-center mb-20">

        <p className="text-red-500 tracking-[5px] uppercase text-sm mb-4">
          AI Infrastructure
        </p>

        <h2
          className="
            text-5xl
            md:text-6xl
            font-black
            uppercase
          "
        >
          SYSTEM
          <span className="block text-red-500">
            ARCHITECTURE
          </span>
        </h2>

        <div className="w-32 h-[2px] bg-red-500 mx-auto mt-6" />

      </div>

      {/* Architecture Flow */}
      <div
        className="
          relative
          grid
          grid-cols-1
          md:grid-cols-5
          gap-8
          items-center
        "
      >

        {/* Block 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="
            bg-[#080808]
            border
            border-red-900
            rounded-2xl
            p-8
            text-center
            shadow-[0_0_30px_rgba(255,0,60,0.1)]
          "
        >

          <h3 className="text-red-500 text-2xl font-black">
            FRONTEND
          </h3>

          <p className="text-gray-500 mt-4 leading-relaxed">
            React + Vite + Tailwind
          </p>

        </motion.div>

        {/* Arrow */}
        <div className="hidden md:flex justify-center text-red-500 text-4xl">
          →
        </div>

        {/* Block 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="
            bg-[#080808]
            border
            border-red-900
            rounded-2xl
            p-8
            text-center
            shadow-[0_0_30px_rgba(255,0,60,0.1)]
          "
        >

          <h3 className="text-red-500 text-2xl font-black">
            AI ENGINE
          </h3>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Gemini + AI Workflows
          </p>

        </motion.div>

        {/* Arrow */}
        <div className="hidden md:flex justify-center text-red-500 text-4xl">
          →
        </div>

        {/* Block 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="
            bg-[#080808]
            border
            border-red-900
            rounded-2xl
            p-8
            text-center
            shadow-[0_0_30px_rgba(255,0,60,0.1)]
          "
        >

          <h3 className="text-red-500 text-2xl font-black">
            DEPLOYMENT
          </h3>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Vercel + Render + GitHub
          </p>

        </motion.div>

      </div>

      {/* Bottom Description */}
      <div className="mt-20 text-center max-w-4xl mx-auto">

        <p
          className="
            text-gray-400
            leading-relaxed
            text-lg
          "
        >
          The ecosystem integrates AI-powered intelligence systems,
          experimentation frameworks, conversational analytics,
          deployment automation, and tactical commerce optimization
          into one scalable command center architecture.
        </p>

      </div>

    </section>
  );
};

export default ArchitectureSection;
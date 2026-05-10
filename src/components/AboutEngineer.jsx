import { motion } from "framer-motion";

const AboutEngineer = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-red-500 tracking-[5px] uppercase text-sm mb-4">
            About The Engineer
          </p>

          <h2 className="text-5xl md:text-6xl font-black uppercase leading-tight">
            INTESHABUL

            <span className="block text-red-500 mt-3">
              HAQUE
            </span>

          </h2>

          <p className="text-gray-400 mt-8 leading-relaxed text-lg">
            AI-focused commerce intelligence engineer specializing in
            digital analytics, CRO experimentation, search optimization,
            conversational AI systems, and tactical intelligence platforms.
          </p>

          <p className="text-gray-500 mt-6 leading-relaxed">
            Experienced across Power BI, SQL, Python, Adobe Analytics,
            experimentation systems, onsite search optimization,
            AI workflows, and fullstack deployment architecture.
          </p>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div
            className="
              border
              border-red-900
              rounded-3xl
              p-10
              bg-[#080808]
              shadow-[0_0_45px_rgba(255,0,60,0.12)]
            "
          >

            <div className="text-7xl mb-8">
              🎭
            </div>

            <h3 className="text-3xl font-black uppercase">
              Tactical AI Architect
            </h3>

            <p className="text-gray-500 mt-6 leading-relaxed">
              Building AI-powered analytics ecosystems,
              experimentation platforms,
              conversational intelligence systems,
              and commerce optimization engines.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default AboutEngineer;
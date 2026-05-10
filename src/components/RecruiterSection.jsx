import { motion } from "framer-motion";

const RecruiterSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <div
        className="
          bg-[#080808]
          border
          border-red-900
          rounded-3xl
          p-12
          shadow-[0_0_40px_rgba(255,0,60,0.12)]
        "
      >

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-red-500 tracking-[5px] uppercase text-sm mb-4">
            Recruiter Intelligence
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              uppercase
            "
          >
            WHY THIS
            <span className="block text-red-500">
              PLATFORM EXISTS
            </span>
          </h2>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {[
            "AI Product Engineering",
            "Commerce Intelligence Systems",
            "Conversational Analytics",
            "Deployment-Ready AI Platforms",
          ].map((item, index) => (

            <motion.div
              key={index}

              whileHover={{
                scale: 1.05,
                y: -5,
              }}

              className="
                bg-black
                border
                border-red-900
                rounded-2xl
                p-8
                text-center
              "
            >

              <div className="text-red-500 text-4xl mb-5">
                ⚡
              </div>

              <h3 className="text-xl font-bold leading-relaxed">
                {item}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default RecruiterSection;
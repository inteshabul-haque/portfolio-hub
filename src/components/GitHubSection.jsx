import { motion } from "framer-motion";

const repos = [
  {
    title: "Search Heist AI",
    tech: "AI Search Intelligence",
  },
  {
    title: "CRO Experimentation Agent",
    tech: "Conversion Intelligence",
  },
  {
    title: "Airbnb MCP AI Agent",
    tech: "Conversational AI",
  },
];

const GitHubSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      {/* Heading */}
      <div className="text-center mb-20">

        <p className="text-red-500 tracking-[5px] uppercase text-sm mb-4">
          Repository Intelligence
        </p>

        <h2
          className="
            text-5xl
            md:text-6xl
            font-black
            uppercase
          "
        >
          GITHUB
          <span className="block text-red-500">
            SYSTEMS
          </span>
        </h2>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {repos.map((repo, index) => (

          <motion.div
            key={index}

            whileHover={{
              scale: 1.05,
              y: -8,
            }}

            className="
              bg-[#080808]
              border
              border-red-900
              rounded-3xl
              p-10
              shadow-[0_0_35px_rgba(255,0,60,0.1)]
            "
          >

            <div className="text-red-500 text-5xl mb-8">
              ⚡
            </div>

            <h3 className="text-2xl font-black leading-snug">
              {repo.title}
            </h3>

            <p className="text-gray-500 mt-5">
              {repo.tech}
            </p>

            <button
              className="
                mt-8
                bg-red-600
                hover:bg-red-700
                transition
                px-6
                py-3
                rounded-xl
                font-semibold
              "
            >
              View Repository
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default GitHubSection;
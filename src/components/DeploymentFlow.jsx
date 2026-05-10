import { motion } from "framer-motion";

const systems = [
  {
    title: "FRONTEND",
    tech: "React + Tailwind",
  },
  {
    title: "AI ENGINE",
    tech: "Gemini AI",
  },
  {
    title: "DEPLOYMENT",
    tech: "Vercel + Render",
  },
  {
    title: "INTELLIGENCE",
    tech: "AI Analytics Systems",
  },
];

const DeploymentFlow = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      {/* Heading */}
      <div className="text-center mb-20">

        <p className="text-red-500 tracking-[5px] uppercase text-sm mb-4">
          Deployment Intelligence
        </p>

        <h2
          className="
            text-5xl
            md:text-6xl
            font-black
            uppercase
          "
        >
          AI SYSTEM
          <span className="block text-red-500">
            DEPLOYMENT FLOW
          </span>
        </h2>

      </div>

      {/* Flow */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-10
          items-center
        "
      >

        {systems.map((system, index) => (

          <motion.div
            key={index}

            whileHover={{
              scale: 1.05,
              y: -8,
            }}

            className="
              relative
              bg-[#080808]
              border
              border-red-900
              rounded-3xl
              p-10
              text-center
              shadow-[0_0_35px_rgba(255,0,60,0.12)]
            "
          >

            {/* Number */}
            <div
              className="
                absolute
                -top-5
                left-1/2
                -translate-x-1/2
                w-10
                h-10
                rounded-full
                bg-red-600
                flex
                items-center
                justify-center
                font-black
              "
            >
              {index + 1}
            </div>

            {/* Content */}
            <h3 className="text-red-500 text-2xl font-black">
              {system.title}
            </h3>

            <p className="text-gray-500 mt-5 leading-relaxed">
              {system.tech}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default DeploymentFlow;
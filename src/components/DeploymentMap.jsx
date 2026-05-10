import { motion } from "framer-motion";

const DeploymentMap = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      {/* Heading */}
      <div className="text-center mb-20">

        <p className="text-red-500 tracking-[5px] uppercase text-sm mb-4">
          Deployment Topology
        </p>

        <h2 className="text-5xl md:text-6xl font-black uppercase">
          GLOBAL AI
          <span className="block text-red-500">
            DEPLOYMENT NETWORK
          </span>
        </h2>

      </div>

      {/* Map */}
      <div
        className="
          relative
          border
          border-red-900
          rounded-3xl
          overflow-hidden
          bg-[#080808]
          p-20
          min-h-[500px]
          shadow-[0_0_45px_rgba(255,0,60,0.12)]
        "
      >

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,60,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,60,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Nodes */}
        {[
          {
            label: "VERCEL",
            top: "20%",
            left: "20%",
          },
          {
            label: "RENDER",
            top: "50%",
            left: "50%",
          },
          {
            label: "GITHUB",
            top: "30%",
            left: "75%",
          },
          {
            label: "GEMINI AI",
            top: "75%",
            left: "40%",
          },
        ].map((node, index) => (

          <motion.div
            key={index}

            animate={{
              scale: [1, 1.15, 1],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}

            className="
              absolute
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
            style={{
              top: node.top,
              left: node.left,
            }}
          >
            ● {node.label}
          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default DeploymentMap;
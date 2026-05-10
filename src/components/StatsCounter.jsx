import { motion } from "framer-motion";

const stats = [
  {
    value: "3+",
    label: "AI SYSTEMS",
  },
  {
    value: "24/7",
    label: "TACTICAL MONITORING",
  },
  {
    value: "LIVE",
    label: "DEPLOYMENT STATUS",
  },
  {
    value: "AI",
    label: "COMMERCE INTELLIGENCE",
  },
];

const StatsCounter = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {stats.map((stat, index) => (

          <motion.div
            key={index}

            whileHover={{
              scale: 1.05,
              y: -5,
            }}

            className="
              bg-[#080808]
              border
              border-red-900
              rounded-2xl
              p-10
              text-center
              shadow-[0_0_30px_rgba(255,0,60,0.1)]
            "
          >

            <h2 className="text-5xl font-black text-red-500">
              {stat.value}
            </h2>

            <p
              className="
                text-gray-500
                mt-5
                tracking-[3px]
                text-sm
              "
            >
              {stat.label}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default StatsCounter;
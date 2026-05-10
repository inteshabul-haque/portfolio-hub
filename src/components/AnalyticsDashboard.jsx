import { motion } from "framer-motion";

const cards = [
  {
    title: "Conversion Rate",
    value: "+18%",
  },
  {
    title: "AI Recommendations",
    value: "124",
  },
  {
    title: "Experiments Running",
    value: "12",
  },
  {
    title: "Search Intelligence",
    value: "ACTIVE",
  },
];

const AnalyticsDashboard = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      {/* Heading */}
      <div className="text-center mb-20">

        <p className="text-red-500 tracking-[5px] uppercase text-sm mb-4">
          Tactical Analytics
        </p>

        <h2 className="text-5xl md:text-6xl font-black uppercase">
          LIVE AI
          <span className="block text-red-500">
            ANALYTICS DASHBOARD
          </span>
        </h2>

      </div>

      {/* Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {cards.map((card, index) => (

          <motion.div
            key={index}

            whileHover={{
              scale: 1.05,
              y: -6,
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

            <div className="text-red-500 text-4xl mb-6">
              ⚡
            </div>

            <h3 className="text-gray-500 text-sm tracking-[4px] uppercase">
              {card.title}
            </h3>

            <p className="text-5xl font-black mt-6 text-white">
              {card.value}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default AnalyticsDashboard;
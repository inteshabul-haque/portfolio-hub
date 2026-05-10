import { motion } from "framer-motion";

const systems = [
  {
    label: "TACTICAL ANALYTICS",
    status: "ACTIVE",
  },
  {
    label: "AI MONITORING",
    status: "ONLINE",
  },
  {
    label: "EXPERIMENTATION ENGINE",
    status: "RUNNING",
  },
  {
    label: "DEPLOYMENT NETWORK",
    status: "CONNECTED",
  },
];

const CommandCenter = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      {/* Header */}
      <div className="text-center mb-20">

        <p className="text-red-500 tracking-[5px] uppercase text-sm mb-4">
          Tactical Operations
        </p>

        <h2
          className="
            text-5xl
            md:text-6xl
            font-black
            uppercase
          "
        >
          COMMAND
          <span className="block text-red-500">
            CENTER
          </span>
        </h2>

      </div>

      {/* Dashboard */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
        "
      >

        {/* Left Terminal */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="
            bg-[#070707]
            border
            border-red-900
            rounded-3xl
            p-8
            shadow-[0_0_40px_rgba(255,0,60,0.12)]
          "
        >

          {/* Top Dots */}
          <div className="flex gap-2 mb-8">

            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />

          </div>

          {/* Logs */}
          <div className="space-y-4 font-mono text-sm">

            <p className="text-red-500">
              &gt; Initializing Professor AI Core...
            </p>

            <p className="text-green-400">
              ✔ Tactical AI Systems Online
            </p>

            <p className="text-green-400">
              ✔ Search Intelligence Connected
            </p>

            <p className="text-green-400">
              ✔ Commerce Intelligence Operational
            </p>

            <p className="text-green-400">
              ✔ Multi-Agent Monitoring Active
            </p>

            <p className="text-red-400">
              &gt; Awaiting Tactical Commands...
            </p>

          </div>

        </motion.div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {systems.map((system, index) => (

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
                p-8
                flex
                flex-col
                justify-between
                shadow-[0_0_30px_rgba(255,0,60,0.08)]
              "
            >

              <div className="text-red-500 text-4xl mb-5">
                ⚡
              </div>

              <div>

                <h3 className="text-xl font-black leading-relaxed">
                  {system.label}
                </h3>

                <p className="text-green-400 mt-4 tracking-widest text-sm">
                  ● {system.status}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CommandCenter;
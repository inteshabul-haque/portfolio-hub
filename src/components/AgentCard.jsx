import { motion } from "framer-motion";

const AgentCard = ({ agent }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}

      transition={{
        duration: 0.3,
      }}

      className="
        relative
        overflow-hidden
        bg-[#080808]
        border
        border-red-900
        rounded-3xl
        p-8
        shadow-[0_0_40px_rgba(255,0,60,0.12)]
      "
    >

      {/* Glow Effect */}
      <div
        className="
          absolute
          top-0
          right-0
          w-40
          h-40
          bg-red-600/10
          blur-[80px]
          rounded-full
        "
      />

      {/* Status */}
      <div className="flex justify-between items-center mb-8 relative z-10">

        <div
          className="
            px-4
            py-2
            rounded-full
            border
            border-red-900
            bg-black
            text-red-400
            text-xs
            tracking-[3px]
          "
        >
          AI SYSTEM
        </div>

        <div
          className={`
            px-4
            py-2
            rounded-full
            text-xs
            tracking-[3px]
            border

            ${
              agent.status === "ACTIVE"
                ? "border-green-900 text-green-400 bg-green-950/20"
                : "border-yellow-900 text-yellow-400 bg-yellow-950/20"
            }
          `}
        >
          ● {agent.status}
        </div>

      </div>

      {/* Icon */}
      <div className="text-6xl mb-8 relative z-10">
        🎭
      </div>

      {/* Title */}
      <h2
        className="
          text-3xl
          font-black
          uppercase
          leading-tight
          relative
          z-10
        "
      >
        {agent.title}
      </h2>

      {/* Divider */}
      <div className="w-20 h-[2px] bg-red-500 mt-6 relative z-10" />

      {/* Description */}
      <p
        className="
          text-gray-400
          mt-8
          leading-relaxed
          relative
          z-10
        "
      >
        {agent.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-10 relative z-10">

        {/* Launch */}
        <a
          href={agent.live}
          target="_blank"
          rel="noreferrer"
        >

          <button
            className="
              bg-red-600
              hover:bg-red-700
              transition
              duration-300
              px-6
              py-3
              rounded-xl
              font-semibold
              shadow-[0_0_25px_rgba(255,0,60,0.4)]
            "
          >
            Launch Agent
          </button>

        </a>

        {/* GitHub */}
        <a
          href={agent.github}
          target="_blank"
          rel="noreferrer"
        >

          <button
            className="
              border
              border-red-900
              hover:bg-red-950
              transition
              duration-300
              px-6
              py-3
              rounded-xl
              font-semibold
            "
          >
            GitHub
          </button>

        </a>

      </div>

    </motion.div>
  );
};

export default AgentCard;
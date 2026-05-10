import { motion } from "framer-motion";

const RadarScanner = () => {
  return (
    <div
      className="
        relative
        w-[320px]
        h-[320px]
        rounded-full
        border
        border-red-900
        overflow-hidden
        bg-black
        shadow-[0_0_40px_rgba(255,0,60,0.15)]
      "
    >

      {/* Radar Rings */}
      <div className="absolute inset-6 rounded-full border border-red-900/40" />
      <div className="absolute inset-12 rounded-full border border-red-900/40" />
      <div className="absolute inset-20 rounded-full border border-red-900/40" />

      {/* Cross Lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-900/30" />
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-red-900/30" />

      {/* Rotating Beam */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          origin-center
        "
      >

        <div
          className="
            absolute
            top-1/2
            left-1/2
            w-[160px]
            h-[2px]
            bg-gradient-to-r
            from-red-500
            to-transparent
            shadow-[0_0_20px_red]
            origin-left
          "
        />

      </motion.div>

      {/* Center Dot */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-4
          h-4
          rounded-full
          bg-red-500
          shadow-[0_0_20px_red]
        "
      />

    </div>
  );
};

export default RadarScanner;

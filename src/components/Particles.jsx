import { motion } from "framer-motion";

const particles = [...Array(30)];

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((_, index) => (

        <motion.div
          key={index}

          animate={{
            y: ["0%", "-1000%"],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}

          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}

          className="
            absolute
            rounded-full
            bg-red-500
            shadow-[0_0_15px_red]
          "

          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />

      ))}

    </div>
  );
};

export default Particles;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AIChatWidget = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[999]">

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}

        onClick={() => setOpen(!open)}

        className="
          w-16
          h-16
          rounded-full
          bg-red-600
          flex
          items-center
          justify-center
          text-3xl
          shadow-[0_0_35px_rgba(255,0,60,0.5)]
        "
      >
        🤖
      </motion.button>

      {/* Chat Box */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}

            transition={{
              duration: 0.3,
            }}

            className="
              absolute
              bottom-24
              right-0
              w-[340px]
              bg-[#080808]
              border
              border-red-900
              rounded-3xl
              overflow-hidden
              shadow-[0_0_45px_rgba(255,0,60,0.15)]
            "
          >

            {/* Header */}
            <div
              className="
                border-b
                border-red-900
                px-6
                py-5
                flex
                items-center
                justify-between
              "
            >

              <div>

                <h2 className="text-red-500 font-black text-lg">
                  PROFESSOR AI
                </h2>

                <p className="text-green-400 text-xs tracking-widest mt-1">
                  ● ONLINE
                </p>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                ✕
              </button>

            </div>

            {/* Messages */}
            <div className="p-6 space-y-4">

              <div
                className="
                  bg-black
                  border
                  border-red-900
                  rounded-2xl
                  p-4
                  text-sm
                  text-gray-300
                  leading-relaxed
                "
              >
                Welcome to The Professor's AI Command Center.
                Tactical systems operational.
              </div>

              <div
                className="
                  bg-red-600/10
                  border
                  border-red-900
                  rounded-2xl
                  p-4
                  text-sm
                  text-gray-300
                "
              >
                Explore AI systems, deployment architecture,
                and tactical commerce intelligence platforms.
              </div>

            </div>

            {/* Input */}
            <div
              className="
                border-t
                border-red-900
                p-4
                flex
                gap-3
              "
            >

              <input
                type="text"
                placeholder="Ask Professor AI..."
                className="
                  flex-1
                  bg-black
                  border
                  border-red-900
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  outline-none
                "
              />

              <button
                className="
                  bg-red-600
                  hover:bg-red-700
                  transition
                  px-5
                  rounded-xl
                  font-semibold
                "
              >
                Send
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
};

export default AIChatWidget;
import { useEffect, useState } from "react";

const lines = [
  "> Connecting Tactical Intelligence Systems...",
  "> Search Heist AI Connected",
  "> CRO Experimentation Engine Active",
  "> AI Commerce Intelligence Operational",
  "> Professor AI Command Center Online",
];

const TypingTerminal = () => {

  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {

    let currentIndex = 0;

    const interval = setInterval(() => {

      setDisplayedLines((prev) => [
        ...prev,
        lines[currentIndex],
      ]);

      currentIndex++;

      if (currentIndex >= lines.length) {
        clearInterval(interval);
      }

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div
      className="
        bg-[#070707]
        border
        border-red-900
        rounded-2xl
        p-6
        shadow-[0_0_30px_rgba(255,0,60,0.15)]
      "
    >

      <div className="flex gap-2 mb-5">

        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />

      </div>

      <div className="space-y-3">

        {displayedLines.map((line, index) => (

          <p
            key={index}
            className="text-green-400 font-mono text-sm"
          >
            {line}
          </p>

        ))}

      </div>

    </div>
  );
};

export default TypingTerminal;
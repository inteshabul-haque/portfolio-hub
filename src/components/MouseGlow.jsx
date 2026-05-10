import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (
    <div
      className="
        fixed
        top-0
        left-0
        w-[400px]
        h-[400px]
        rounded-full
        pointer-events-none
        z-[1]
        blur-[120px]
        bg-red-600/20
        transition-transform
        duration-100
      "
      style={{
        transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
      }}
    />
  );
};

export default MouseGlow;
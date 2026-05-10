const MatrixRain = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0 overflow-hidden">

      {Array.from({ length: 40 }).map((_, index) => (

        <div
          key={index}
          className="
            absolute
            top-[-200px]
            text-red-500
            text-xs
            font-mono
            animate-pulse
          "
          style={{
            left: `${index * 3}%`,
            animationDuration: `${5 + index}s`,
          }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i}>
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>

      ))}

    </div>
  );
};

export default MatrixRain;
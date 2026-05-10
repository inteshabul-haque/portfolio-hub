const statuses = [
  {
    name: "SEARCH HEIST AI",
    status: "ONLINE",
  },
  {
    name: "CRO EXPERIMENTATION ENGINE",
    status: "ACTIVE",
  },
  {
    name: "AIRBNB MCP AGENT",
    status: "MONITORING",
  },
];

const LiveStatusBoard = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <div
        className="
          bg-[#070707]
          border
          border-red-900
          rounded-3xl
          overflow-hidden
          shadow-[0_0_40px_rgba(255,0,60,0.12)]
        "
      >

        {/* Header */}
        <div
          className="
            border-b
            border-red-900
            px-8
            py-5
            flex
            justify-between
            items-center
          "
        >

          <h2 className="text-red-500 text-2xl font-black">
            LIVE SYSTEM STATUS
          </h2>

          <div className="text-green-400 tracking-widest text-sm">
            ● OPERATIONAL
          </div>

        </div>

        {/* Rows */}
        <div className="divide-y divide-red-900/30">

          {statuses.map((item, index) => (

            <div
              key={index}
              className="
                px-8
                py-6
                flex
                justify-between
                items-center
              "
            >

              <h3 className="text-white font-semibold">
                {item.name}
              </h3>

              <div className="text-green-400 text-sm tracking-widest">
                ● {item.status}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default LiveStatusBoard;
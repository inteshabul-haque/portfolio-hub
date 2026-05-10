import RadarScanner from "./RadarScanner";

const SystemOverview = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div>

          <p className="text-red-500 tracking-[5px] uppercase text-sm mb-5">
            Tactical Intelligence
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              uppercase
              leading-tight
            "
          >
            SYSTEM
            <span className="block text-red-500">
              OVERVIEW
            </span>
          </h2>

          <p
            className="
              text-gray-400
              mt-8
              leading-relaxed
              text-lg
            "
          >
            The Professor's AI Command Center integrates
            tactical commerce intelligence systems,
            AI experimentation engines,
            conversational analytics workflows,
            and deployment-ready intelligence platforms
            into one unified AI ecosystem.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-12">

            <div
              className="
                bg-[#080808]
                border
                border-red-900
                rounded-2xl
                p-6
              "
            >

              <h3 className="text-4xl font-black text-red-500">
                3+
              </h3>

              <p className="text-gray-500 mt-3">
                AI Systems
              </p>

            </div>

            <div
              className="
                bg-[#080808]
                border
                border-red-900
                rounded-2xl
                p-6
              "
            >

              <h3 className="text-4xl font-black text-green-400">
                LIVE
              </h3>

              <p className="text-gray-500 mt-3">
                Tactical Status
              </p>

            </div>

          </div>

        </div>

        {/* Right Radar */}
        <div className="flex justify-center">

          <RadarScanner />

        </div>

      </div>

    </section>
  );
};

export default SystemOverview;
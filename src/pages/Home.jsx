import Hero from "../components/Hero";
import AgentCard from "../components/AgentCard";
import AboutEngineer from "../components/AboutEngineer";
import Footer from "../components/Footer";

import agents from "../data/agents";

const Home = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <Hero />

      {/* TERMINAL */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div
          className="
            relative
            bg-black
            border
            border-red-900
            rounded-3xl
            p-8
            shadow-[0_0_40px_rgba(255,0,60,0.15)]
          "
        >

          {/* Terminal Dots */}
          <div className="flex gap-3 mb-10">

            <div className="w-4 h-4 rounded-full bg-red-500" />

            <div className="w-4 h-4 rounded-full bg-yellow-400" />

            <div className="w-4 h-4 rounded-full bg-green-500" />

          </div>

          {/* Terminal Text */}
          <div className="space-y-8 text-green-400 text-lg font-mono">

            <p>
              {">"} CRO Experimentation Engine Active
            </p>

            <p>
              {">"} AI Commerce Intelligence Operational
            </p>

            <p>
              {">"} Professor AI Command Center Online
            </p>

          </div>

        </div>

      </section>

      {/* SYSTEM OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-16">

          <p className="text-red-500 tracking-[5px] text-sm uppercase mb-4">
            Tactical Intelligence
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

            {/* Left */}
            <div>

              <h2
                className="
                  text-6xl
                  md:text-7xl
                  font-black
                  uppercase
                  leading-[0.95]
                "
              >
                SYSTEM

                <span className="block text-red-500 mt-3">
                  OVERVIEW
                </span>

              </h2>

            </div>

            {/* Radar */}
            <div className="relative w-[260px] h-[260px] hidden lg:block">

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-red-900
                "
              />

              <div
                className="
                  absolute
                  inset-6
                  rounded-full
                  border
                  border-red-900
                "
              />

              <div
                className="
                  absolute
                  inset-12
                  rounded-full
                  border
                  border-red-900
                "
              />

              <div
                className="
                  absolute
                  inset-20
                  rounded-full
                  border
                  border-red-900
                "
              />

              {/* Radar Beam */}
              <div
                className="
                  absolute
                  top-1/2
                  left-1/2
                  origin-left
                  w-[120px]
                  h-[2px]
                  bg-red-500
                  rotate-[330deg]
                  shadow-[0_0_20px_rgba(255,0,60,0.8)]
                "
              />

              {/* Radar Dot */}
              <div
                className="
                  absolute
                  top-[42%]
                  left-[72%]
                  w-3
                  h-3
                  rounded-full
                  bg-red-500
                  shadow-[0_0_20px_rgba(255,0,60,1)]
                "
              />

            </div>

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {agents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
            />
          ))}

        </div>

      </section>

      {/* ABOUT ENGINEER */}
      <AboutEngineer />

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Home;
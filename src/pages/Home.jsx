import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AgentCard from "../components/AgentCard";
import Footer from "../components/Footer";
import MouseGlow from "../components/MouseGlow";
import TypingTerminal from "../components/TypingTerminal";
import SystemOverview from "../components/SystemOverview";
import ArchitectureSection from "../components/ArchitectureSection";
import StatsCounter from "../components/StatsCounter";
import RecruiterSection from "../components/RecruiterSection";
import DeploymentFlow from "../components/DeploymentFlow";
import LiveStatusBoard from "../components/LiveStatusBoard";
import CommandCenter from "../components/CommandCenter";
import HolographicBanner from "../components/HolographicBanner";
import AIChatWidget from "../components/AIChatWidget";
import AlertBanner from "../components/AlertBanner";
import SecurityClearance from "../components/SecurityClearance";
import GitHubSection from "../components/GitHubSection";
import MatrixRain from "../components/MatrixRain";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import DeploymentMap from "../components/DeploymentMap";
import agents from "../data/agents";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">

      {/* Matrix Rain */}
      <MatrixRain />

      {/* Mouse Glow */}
      <MouseGlow />

      {/* Global Glow */}
      <div
        className="
          fixed
          top-0
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          bg-red-600/10
          blur-[180px]
          rounded-full
          pointer-events-none
          z-0
        "
      />

      {/* Main Content */}
      <div className="relative z-10">

        {/* Alert Banner */}
        <AlertBanner />

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* AI Terminal */}
        <section className="max-w-5xl mx-auto px-6 py-12">

          <TypingTerminal />

        </section>

        {/* System Overview */}
        <SystemOverview />

        {/* Stats Counter */}
        <StatsCounter />

        {/* Analytics Dashboard */}
        <AnalyticsDashboard />

        {/* Architecture */}
        <ArchitectureSection />

        {/* Deployment Flow */}
        <DeploymentFlow />

        {/* Deployment Map */}
        <DeploymentMap />

        {/* Live Status */}
        <LiveStatusBoard />

        {/* Command Center */}
        <CommandCenter />

        {/* Recruiter Section */}
        <RecruiterSection />

        {/* Holographic Banner */}
        <HolographicBanner />

        {/* Security Clearance */}
        <SecurityClearance />

        {/* GitHub Systems */}
        <GitHubSection />

        {/* AI Agent Arsenal */}
        <section className="max-w-7xl mx-auto px-6 py-24">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-red-500 tracking-[5px] text-sm uppercase mb-4">
              Tactical AI Ecosystem
            </p>

            <h2
              className="
                text-5xl
                md:text-6xl
                font-black
                uppercase
              "
            >
              AI AGENT ARSENAL
            </h2>

            <div className="w-32 h-[2px] bg-red-500 mx-auto mt-6" />

            <p
              className="
                text-gray-500
                mt-8
                max-w-3xl
                mx-auto
                leading-relaxed
              "
            >
              Tactical AI systems designed for experimentation,
              optimization, conversational analytics,
              and commerce intelligence automation.
            </p>

          </div>

          {/* Agent Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

            {agents.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
              />
            ))}

          </div>

        </section>

        {/* Footer */}
        <Footer />

      </div>

      {/* Floating AI Assistant */}
      <AIChatWidget />

    </div>
  );
};

export default Home;
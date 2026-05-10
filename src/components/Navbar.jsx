import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-black/90
        backdrop-blur-md
        border-b
        border-red-900
      "
    >

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <div>

          <h1 className="text-red-500 text-2xl font-black tracking-[3px]">
            THE PROFESSOR'S AI
          </h1>

          <p className="text-gray-500 text-xs tracking-[4px] mt-1">
            COMMAND CENTER
          </p>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-400 font-medium">

          <a href="#" className="hover:text-red-500 transition">
            AGENTS
          </a>

          <a href="#" className="hover:text-red-500 transition">
            SYSTEMS
          </a>

          <a href="#" className="hover:text-red-500 transition">
            DEPLOYMENTS
          </a>

          <a href="#" className="hover:text-red-500 transition">
            GITHUB
          </a>

        </div>

        {/* Mobile */}
        <MobileMenu />

      </div>

    </nav>
  );
};

export default Navbar;
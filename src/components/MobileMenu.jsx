import { useState } from "react";

const MobileMenu = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">

      <button
        onClick={() => setOpen(!open)}
        className="text-red-500 text-3xl"
      >
        ☰
      </button>

      {open && (

        <div
          className="
            absolute
            top-20
            right-6
            bg-[#080808]
            border
            border-red-900
            rounded-2xl
            p-6
            flex
            flex-col
            gap-5
            text-sm
            tracking-widest
          "
        >

          <a href="#">AGENTS</a>
          <a href="#">SYSTEMS</a>
          <a href="#">DEPLOYMENTS</a>
          <a href="#">GITHUB</a>

        </div>

      )}

    </div>
  );
};

export default MobileMenu;
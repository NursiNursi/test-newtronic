import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "./Logo";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute flex w-full items-center justify-between p-4">
      <Logo />

      <ul className="hidden cursor-pointer text-2xl text-white md:flex">
        <li className="p-4 font-semibold text-[#00df9a]">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Contact</li>
        <li className="p-4">About</li>
      </ul>

      <HiMenuAlt3
        onClick={handleNav}
        className="z-20 block cursor-pointer text-white md:hidden"
        size={40}
      />
      <div
        className={
          nav
            ? "fixed left-0 top-0 z-10 h-screen w-full flex-col bg-black/90 px-4 py-7 text-gray-300 duration-300 ease-in"
            : "absolute left-[-100%] top-0 z-10 h-screen duration-500 ease-in"
        }
      >
        <ul className="fixed flex h-full w-full flex-col items-center justify-center">
          <li className="p-8 text-3xl font-bold text-[#00df9a]">Home</li>
          <li className="p-8 text-3xl font-bold">Company</li>
          <li className="p-8 text-3xl font-bold">Contact</li>
          <li className="p-8 text-3xl font-bold">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import Logo from "../images/Logo.png";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-custom-purple py-3 fixed z-10 pb-5">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="logo" className="justify-start sm:pl-10" />

        <button
          className="text-white sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-8 h-8 mr-4" />
          )}
        </button>

        <div className="hidden sm:flex space-x-4 text-white">
          <button className="hover:text-black px-4">SERVICES</button>
          <button className="hover:text-black px-4">ABOUT US</button>
          <button className="hover:text-black px-4">CONTACT US</button>
          <button className="hover:text-black px-4">CAREERS</button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white text-black">
          <button
            className="absolute top-0 right-6 m-4"
            onClick={() => setIsOpen(false)}
          >
            <XIcon className="w-8 h-8" />
          </button>

          <div className="flex flex-col font-semibold items-start">
            <button className="hover:text-custom-purple py-[20px] px-4">
              HOME
            </button>
            <button className="hover:text-custom-purple py-[20px] px-4">
              SERVICES
            </button>
            <button className="hover:text-custom-purple py-[20px] px-4">
              ABOUT US
            </button>
            <button className="hover:text-custom-purple py-[20px] px-4">
              CONTACT US
            </button>
            <button className="hover:text-custom-purple py-[20px] px-4">
              CAREERS
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

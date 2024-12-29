import { useState } from "react";
import Brand_Logo from "../../assets/Img/logo-dark.png";
import Bar_Icon from "../../assets/Img/bar-icon.png";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };

  const closeMenu = () => {
    SetIsOpen(false);
  };

  return (
    <div id="home">
      {/* Header/Navbar */}
      <div className="w-[95%] md:w-[80%] mx-auto py-2 md:py-5 flex items-center justify-between text-scndry_txt">
        {/* Logo */}
        <div>
          <img
            src={Brand_Logo}
            width={160}
            alt="Brand-Logo"
            className="cursor-pointer"
          />
        </div>

        {/* NavLinks */}
        <nav>
          <ul className="hidden md:flex flex items-center gap-10 text-[18px] font-semibold">
            <li className="hover:text-primary cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <a href="#product">Product</a>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* NavBtns */}
        <div className="flex items-center space-x-3 text-[18px] font-semibold">
          <button className="w-[120px] h-[45px] md:h-[54px] md:w-[139px] border border-white hover:text-primary">
            Login
          </button>
          <img
            src={Bar_Icon}
            width={55}
            onClick={toggleMenu}
            alt="Bar-Icon"
            className="flex md:hidden cursor-pointer"
          />
        </div>
      </div>

      {/* MobNavbar */}
      <div>
        <ul
          className={
            isOpen
              ? "md:hidden z-10 fixed top-0 right-0 pt-[150px] w-[250px] h-screen bg-light_bg flex flex-col items-center gap-10 text-first_txt text-[18px] font-semibold duration-300"
              : "md:hidden z-10 fixed top-0 right-[-100%] pt-[150px] w-[250px] h-screen bg-light_bg flex flex-col items-center gap-10 text-first_txt text-[18px] font-semibold duration-300"
          }
        >
          <li className="hover:text-primary cursor-pointer">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a href="#product" onClick={closeMenu}>
              Product
            </a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <MdOutlineClose
            onClick={toggleMenu}
            size={35}
            className="absolute top-5 right-5 z-10 cursor-pointer"
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

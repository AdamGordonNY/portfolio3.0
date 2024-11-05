import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="flex lg:w-4/5 ">
      <nav className="w-full">
        <button className="">
          <Image src="/A.svg" alt="DropDown" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

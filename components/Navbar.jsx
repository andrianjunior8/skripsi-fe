import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#F3EFE0]">
      <div className="flex justify-center items-center h-full w-full px-2 2xl:px-16 ">
        {/* <Image
          src="/../public/assets/me.jpg"
          alt="/"
          width="50"
          height="50"
          className="rounded-full"
        ></Image> */}
        <div className="">
          <ul className="hidden md:flex mr-5">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b ">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/project">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

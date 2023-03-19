import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#F3EFE0]">
      <div className="flex justify-center items-center h-full w-full px-2 2xl:px-16 border border-red-600">
        {/* <Image
          src="/../public/assets/me.jpg"
          alt="/"
          width="50"
          height="50"
          className="rounded-full"
        ></Image> */}
        <div>
          <ul className="hidden md:flex mr-5">
            <Link href="/dashboard">
              <li className="m-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/venue">
              <li className="m-10 text-sm uppercase hover:border-b">Venue</li>
            </Link>
            <Link href="/contactus">
              <li className="m-10 text-sm uppercase hover:border-b">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="absolute right-16">
          <p>Welcome, Satria</p>
          <button
            type="button"
            className="bg-slate-200 rounded font-bold p-2"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

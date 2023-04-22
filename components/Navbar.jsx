import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const Navbar = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const router = useRouter();

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setRole(localStorage.getItem("role"));
  }, []);

  // name = "admin";
  // role = 1;

  function logout() {
    localStorage.clear();
    router.push("/login");
  }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#F3EFE0]">
      <div className="flex justify-center items-center h-full w-full px-2 2xl:px-16 ">
        <div className="absolute left-16">
          {/* <Image
            src="/../public/assets/me.jpg"
            alt="/"
            width="50"
            height="50"
          ></Image> */}
        </div>
        <div>
          {/* Role 1 === USER */}
          {role === 1 ? (
            <ul className="hidden md:flex mr-5">
              <Link href="/dashboard">
                <li className="m-10 text-sm text-[#000000] uppercase hover:border-b">
                  Home
                </li>
              </Link>
              <Link href="/venue">
                <li className="m-10 text-sm text-[#000000] uppercase hover:border-b">
                  Venue
                </li>
              </Link>
              <Link href="/contactus">
                <li className="m-10 text-sm text-[#000000] uppercase hover:border-b">
                  Contact Us
                </li>
              </Link>
            </ul>
          ) : (
            <ul className="hidden md:flex mr-5">
              <Link href="/organizer/dashboard">
                <li className="m-10 text-sm text-[#000000] uppercase hover:border-b">
                  Home
                </li>
              </Link>
              <Link href="/organizer/venue">
                <li className="m-10 text-sm text-[#000000] uppercase hover:border-b">
                  Venue
                </li>
              </Link>
              <Link href="/organizer/contactus">
                <li className="m-10 text-sm text-[#000000] uppercase hover:border-b">
                  Contact Us
                </li>
              </Link>
            </ul>
          )}
        </div>
        <div className="absolute right-16">
          {name !== null ? (
            <>
              <p className="text-[#000000]">Welcome, {name}</p>
              <Button
                variant="contained"
                className="bg-blue-600"
                onClick={() => logout()}
              >
                Log out
              </Button>
            </>
          ) : (
            <div className="gap-2">
              <Button
                variant="contained"
                className="rounded font-bold p-2 m-2 bg-blue-600"
                onClick={() => router.push("/login")}
              >
                Login
              </Button>

              <Button
                variant="contained"
                className="rounded font-bold p-2 m-2 bg-blue-600"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

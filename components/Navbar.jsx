import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Typography } from "@mui/material";

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

  useEffect(() => {
    console.log("role: ", role);
  }, []);

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
          {role === 1 ||
          role === undefined ||
          role === null ||
          role === "" ||
          role === "1" ? (
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
              <Link href="/leaderboard">
                <li className="m-10 text-sm text-[#000000] uppercase hover:border-b">
                  Leaderboard
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
            <div className="flex flex-row  border-red-500 border-dashed w-64 align-baseline">
              <div className="m-2  border-dashed border-green-500">
                <p className="text-[#000000]">Welcome, {name}</p>
              </div>
              <div>
                <Image
                  className="overflow-hidden rounded-full flex w-11 h-11 shrink-0 grow-0 mr-6 my-3"
                  src={`/person.jpg`}
                  width="100"
                  height="100"
                  alt="person"
                ></Image>
              </div>
              <div>
                <Button
                  variant="contained"
                  sx={{ mt: 3 }}
                  className="bg-blue-600"
                  onClick={() => logout()}
                >
                  <Typography fontSize={7}>Log out</Typography>
                </Button>
              </div>
            </div>
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

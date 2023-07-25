import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [anchorEl, setAnchorEl] = useState(false);
  const [anchorElMenu, setAnchorElMenu] = useState(false);
  const open = Boolean(anchorEl);
  const openMenu = Boolean(anchorElMenu);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };
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
    <div className="fixed w-screen h-20 shadow-xl z-[100] bg-white">
      <div className="flex justify-center items-center h-full w-full px-2 2xl:px-16 ">
        <div className="absolute left-16">
          <Image
            src="/sehatRagaIcon.png"
            alt="/"
            width="100"
            height="100"
          ></Image>
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
                  Halaman Utama
                </li>
              </Link>
              <Link href="/venue">
                <li className="m-10 text-sm text-[#000000] uppercase hover:border-b">
                  Venue
                </li>
              </Link>
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  className="m-8 text-sm text-[#000000] uppercase hover:border-b"
                  onClick={(e) => handleClick(e)}
                >
                  Komunitas
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => router.push("/mycommunity")}>
                    Komunitas Saya
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/joincommunity")}>
                    Gabung Komunitas
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/createcommunity")}>
                    Buat Komunitas
                  </MenuItem>
                </Menu>
              </div>
              <Link href="/aboutus">
                <li className="m-10 text-sm text-[#000000] uppercase hover:border-b">
                  Tentang Kami
                </li>
              </Link>
            </ul>
          ) : (
            <ul className="hidden md:flex mr-5">
              <Link href="/organizer/dashboard">
                <li className="m-10 text-sm text-[#000000] uppercase hover:border-b">
                  Dashboard
                </li>
              </Link>
            </ul>
          )}
        </div>
        <div className="absolute right-16">
          {name !== null ? (
            <div className="flex flex-row  border-red-500 border-dashed w-64 align-baseline">
              <div className="m-2  border-dashed border-green-500"></div>
              <div>
                <Button
                  id="basic-button"
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  className="m-8 text-sm text-[#000000] uppercase hover:border-b"
                  onClick={(e) => handleClickMenu(e)}
                >
                  <p className="text-[#000000]">Selamat Datang, {name}</p>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorElMenu}
                  open={openMenu}
                  onClose={handleCloseMenu}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {role === "1" || role === 1 ? (
                    <MenuItem onClick={(e) => router.push("/ticket")}>
                      Tiket
                    </MenuItem>
                  ) : (
                    <></>
                  )}

                  <MenuItem onClick={() => logout()}>Keluar</MenuItem>
                </Menu>
              </div>
            </div>
          ) : (
            <div className="gap-2">
              <Button
                variant="contained"
                className="rounded font-bold p-2 m-2 bg-blue-600"
                onClick={() => router.push("/login")}
              >
                Masuk
              </Button>

              <Button
                variant="contained"
                className="rounded font-bold p-2 m-2 bg-blue-600"
                onClick={() => router.push("/signup")}
              >
                Daftar
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

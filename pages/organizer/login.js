import React, { useCallback, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "../../services/api/core";
import { debounce } from "lodash";
import { Box, Button, Collapse, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const VenueOwnerLogin = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [messageUsername, setMessageUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [messageLogin, setMessageLogin] = useState("");
  const [showResponseToast, setShowResponseToast] = useState(false);

  function handleEnterLogin(e) {
    var code = e.charCode || e.which;
    if (code === 13) {
      e.preventDefault();
      loginValidation();
    }
  }

  const debounceMountGetLogin = useCallback(debounce(mountGetLogin, 400));

  async function mountGetLogin() {
    try {
      const parameter = {
        username: username,
        password: password,
        roleid: 2,
      };

      console.log("[PAYLOAD][LOGIN] : ", parameter);

      const getLogin = await api.getLogin(parameter);
      console.log("getlogin", getLogin);
      const { data } = getLogin.data;
      if (data != null) {
        console.log("data", data);
        setMessageLogin("");
        localStorage.setItem("name", data[0].first_name);
        localStorage.setItem("role", data[0].role_id);
        localStorage.setItem("userid", data[0].user_id);
        localStorage.setItem("venueid", data[0].venue_id);
        // e.preventDefault();
        router.push("/organizer/dashboard");
      } else {
        setShowResponseToast(true);
      }
    } catch (error) {
      console.log("ERROR LOGIN", error);
    }
  }

  function loginValidation() {
    var validation = true;

    setMessageLogin("");
    if (username === "") {
      validation = false;
      setMessageUsername("Username must be filled !");
    } else {
      setMessageUsername("");
    }
    if (password === "") {
      validation = false;
      setMessagePassword("Password must be filled !");
    } else {
      setMessagePassword("");
    }
    console.log(validation);
    if (validation == true) {
      debounceMountGetLogin();
    } else {
      console.log("Login Rejected");
    }
  }

  return (
    <div>
      <Head>
        <title>Login Sebagai Pemilik Owner</title>
        <link rel="icon" href="/SR.png" />
      </Head>

      <main className="bg-gradient-to-b from-slate-200 to-slate-100 justify-center content-center grid w-screen h-screen">
        <form className="bg-white shadow-md rounded px-5 pt-5 pb-5 mb-5 w-96">
          <div className=" m-2 p-2">
            <div className="mb-5 flex items-center">
              <Link href="/login">
                <ArrowBackIcon className="text-black"></ArrowBackIcon>
              </Link>
              <label className="text-sm text-black font-semibold ml-2">
                <Link href="/login" className="no-underline text-black">
                  Kembali
                </Link>
              </label>
            </div>

            <p className="font-bold text-2xl">Masuk Sebagai Pemilik Venue</p>

            <div className="w-full">
              <div className="mb-3 py-1">
                <TextField
                  className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  label="Username"
                  size="small"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                ></TextField>
                <p className="text-xs text-red-500">{messageUsername}</p>
              </div>
              <div className="py-1">
                <TextField
                  className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  label="Kata Sandi"
                  size="small"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => handleEnterLogin(e)}
                  type={showPassword ? "text" : "password"}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                ></TextField>
                <p className="text-xs text-red-500">{messageUsername}</p>
              </div>
              <div className="mb-6 m-1 my-1">
                <input
                  type="checkbox"
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="mr-2"
                ></input>
                <label className="text-sm">Tampilkan Kata Sandi</label>
              </div>

              <div className="flex place-content-center mt-10">
                <button
                  className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  onClick={() => loginValidation()}
                >
                  Masuk
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
      <Collapse in={showResponseToast}>
        <Box className="fixed flex items-center w-full max-w-xs p-4 space-x-4 divide-x rounded-lg shadow top-5 right-5  space-x dark:bg-red-500">
          <p className="p-2 text-white">{"Failed to Sign in"}</p>
          <Button
            variant="contained"
            className="absolute right-2 hover:bg-black"
            onClick={() => setShowResponseToast(false)}
          >
            X
          </Button>
        </Box>
      </Collapse>
    </div>
  );
};

export default VenueOwnerLogin;

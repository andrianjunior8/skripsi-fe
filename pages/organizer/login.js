import React, { useCallback, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "../../services/api/core";
import { debounce } from "lodash";
import { Box, Button, Collapse, TextField } from "@mui/material";

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
        user_name: username,
        pass_word: password,
        role_id: 2,
      };

      console.log(parameter);

      const getLogin = await api.getLogin(parameter);
      console.log("getlogin", getLogin);
      const { data } = getLogin.data;
      if (data != null) {
        console.log("data", data);
        setMessageLogin("");
        localStorage.setItem("name", data[0].first_name);
        localStorage.setItem("role", data[0].role_id);
        localStorage.setItem("userid", data[0].user_id);
        e.preventDefault();
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
        <title>Venue Owner Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-b from-cyan-500 to-blue-500 justify-center content-center grid w-screen h-screen">
        <form className="bg-white shadow-md rounded px-5 pt-5 pb-5 mb-5 w-96">
          <div className=" m-2 p-2">
            <div className="mb-5 flex items-center">
              <Link href="/login">
                <Image src="/favicon.ico" width={24} height={24} />
              </Link>
              <label className="text-sm text-black font-semibold ml-2">
                Back
              </label>
            </div>

            <p className="mb-5 text-2xl font-bold">Login as Venue Owner</p>

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
              </div>
              <div className="py-1">
                <TextField
                  className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  label="Password"
                  size="small"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => handleEnterLogin(e)}
                  type={showPassword ? "text" : "password"}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                ></TextField>
              </div>
              <div className="mb-6 m-1 my-1">
                <input
                  type="checkbox"
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="mr-2"
                ></input>
                <label className="text-sm">Show Password</label>
              </div>

              <div className="flex place-content-center mt-10">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  variant="outlined"
                  size="small"
                  onClick={() => loginValidation()}
                >
                  Login
                </button>
              </div>

              <p className="text-sm text-center opacity-50 pt-5">
                ©2023 Sportify
              </p>
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

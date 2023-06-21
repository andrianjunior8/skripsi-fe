import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import api from "../services/api/core";
import { useRouter } from "next/router";
import { Box, Button, Collapse, Link, TextField } from "@mui/material";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [messageUsername, setMessageUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [messageLogin, setMessageLogin] = useState("");
  const [errorTextField, setErrorTextField] = useState("hidden");
  const [showResponseToast, setShowResponseToast] = useState(false);

  const debounceMountGetLogin = useCallback(debounce(mountGetLogin, 400));

  async function mountGetLogin() {
    try {
      const parameter = {
        username: username,
        password: password,
        roleid: 1,
      };

      console.log("[PAYLOAD][LOGIN][USER]", parameter);

      const getLogin = await api.getLogin(parameter);

      const { data } = getLogin.data;
      if (data != null) {
        console.log("data", data);
        setMessageLogin("");
        localStorage.setItem("name", data[0].first_name);
        localStorage.setItem("role", data[0].role_id);
        localStorage.setItem("userid", data[0].user_id);
        router.push("/dashboard");
      } else {
        setShowResponseToast(true);
      }
    } catch (error) {
      console.log("ERROR LOGIN", error);
    }
  }

  function handleEnterLogin(e) {
    var code = e.charCode || e.which;
    if (code === 13) {
      e.preventDefault();
      loginValidation();
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

  useEffect(() => {
    console.log("username", username);
  }, [username]);

  return (
    <div className="bg-gradient-to-b from-cyan-500 to-blue-500 justify-center content-center grid w-screen h-screen">
      <form className="bg-white shadow-md rounded px-5 pt-5 pb-5 mb-5 w-96">
        <div className=" m-2 p-2">
          <div className="mb-5 flex items-center">
            <Link href="/dashboard">
              <Image src="/favicon.ico" width={24} height={24} />
            </Link>
            <label className="text-sm text-black font-semibold ml-2">
              Back to dashboard
            </label>
          </div>
          <p className="font-semibold text-3xl">Login</p>
          <p className="py-4">Hello, login to continue!</p>
          {/* <div class="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div> */}
          <div className="w-full max-w-xs ">
            <div className="mb-4 py-1">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                size="small"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => handleEnterLogin(e)}
              ></TextField>
              <p className="text-xs text-red-500">{messageUsername}</p>
            </div>
            <div className="py-1">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                size="small"
                type={showPassword ? "text" : "password"}
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => handleEnterLogin(e)}
              ></TextField>
              <p className="text-xs text-red-500">{messagePassword}</p>
            </div>
            <div className="mb-6 m-1 my-1">
              <input
                type="checkbox"
                onChange={(e) => setShowPassword(e.target.checked)}
                className="mr-2"
              ></input>
              <label className="text-sm">Show Password</label>
            </div>
            <div className="flex place-content-center my-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={() => loginValidation()}
              >
                Login
              </button>
            </div>
            <div className="text-sm text-center mt-3">
              <p>
                {`Don't have an account ? sign up `}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/signup");
                  }}
                >
                  here
                </button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
          <div className="text-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/organizer/login");
              }}
            >{`Login as venue owner`}</button>
          </div>
        </div>
      </form>
      <div
        style={{
          visibility: errorTextField,
        }}
        class="fixed flex items-center bg-red-500 border-l-4 border-red-700 top-5 right-5 shadow-md mb-2 p-2"
      >
        <div class="text-red-500 rounded-full bg-white mr-3">
          <svg
            width="1.8em"
            height="1.8em"
            viewBox="0 0 16 16"
            class="bi bi-x"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
            />
            <path
              fill-rule="evenodd"
              d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
            />
          </svg>
        </div>
        <div class="text-white max-w-xs ">Login Failed</div>
      </div>
      <Collapse in={showResponseToast}>
        <Box className="fixed flex items-center w-full max-w-xs p-4 space-x-4 divide-x rounded-lg shadow top-5 right-5  space-x dark:bg-red-500">
          <p className="p-2 text-white">{"Failed to Sign in"}</p>
          <Button
            className="absolute right-2 hover:bg-inherit"
            variant="contained"
            onClick={() => setShowResponseToast(false)}
          >
            X
          </Button>
        </Box>
      </Collapse>
    </div>
  );
};

export default Login;

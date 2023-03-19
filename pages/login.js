import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import api from "../services/api/core";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [messageUsername, setMessageUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageLogin, setMessageLogin] = useState("");
  const [errorTextField, setErrorTextField] = useState(true);

  const debounceMountGetLogin = useCallback(debounce(mountGetLogin, 400));

  async function mountGetLogin() {
    loginValidation();
    try {
      const parameter = {
        username: username,
        password: password,
      };

      console.log(parameter);

      const getLogin = await api.getLogin(parameter);
      console.log("getlogin", getLogin);
      const { data } = getLogin.data;
      if (data != null) {
        console.log("data", data);
        setMessageLogin("");
        setErrorTextField(true);
      } else {
        console.log("data nil");
        setMessageLogin("Inccorect username or password!");
        setErrorTextField(false);
      }
    } catch (error) {
      console.log("ERROR LOGIN", error);
    }
  }

  function handleEnterLogin(e) {
    var code = e.charCode || e.which;
    if (code === 13) {
      e.preventDefault();
      console.log("Login button pressed");
      debounceMountGetLogin();
    }
  }

  function loginValidation() {
    setMessageLogin("");
    if (username === "") {
      setMessageUsername("Username must be filled !");
    } else {
      setMessageUsername("");
    }
    if (password === "") {
      setMessagePassword("Password must be filled !");
    } else {
      setMessagePassword("");
    }
  }

  useEffect(() => {
    console.log("username", username);
  }, [username]);

  return (
    <div className="bg-gray-600 justify-center content-center grid w-screen h-screen">
      <form className="bg-white shadow-md rounded px-5 pt-5 pb-5 mb-5 w-96">
        <div className=" m-2 p-2">
          <p className="font-semibold text-3xl">Login</p>
          <p className="py-4">Hello, login to continue!</p>
          <div class="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
          <div className="w-full max-w-xs">
            <div className="mb-4 py-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                required
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => handleEnterLogin(e)}
              ></input>
              <p className="text-xs text-red-500">{messageUsername}</p>
            </div>
            <div className="py-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => handleEnterLogin(e)}
              ></input>
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

            <div className="border border-red-900" hidden={errorTextField}>
              <p className="text-center p-6">{messageLogin}</p>
            </div>
            <div className="flex place-content-center my-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={() => debounceMountGetLogin()}
              >
                Login
              </button>
            </div>
            <div className="text-sm text-center mt-3">
              <p>
                {`Don't have an account ? sign up `}
                <button onClick={() => router.push("/signup")}>here</button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
          <div className="text-center">
            <p>{`Login as venue owner`}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

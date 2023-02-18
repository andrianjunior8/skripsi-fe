import React from "react";
import { useState, useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageLogin, setMessageLogin] = useState("");

  function handleEnterLogin(e) {
    var code = e.charCode || e.which;
    if (code === 13) {
      e.preventDefault();
      console.log("Login button pressed");
    }
  }

  useEffect(() => {
    console.log("username", username);
  }, [username]);

  return (
    <div className="bg-slate-50 justify-center content-center grid w-screen h-screen">
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
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => handleEnterLogin(e)}
              ></input>
            </div>
            <div className={`visible text-xs text-red-500`}>
              <p>Wrong username or password</p>
            </div>
            <div className="mb-6 m-1 my-4">
              <input
                type="checkbox"
                onChange={(e) => setShowPassword(e.target.checked)}
                className="mr-2"
              ></input>
              <label className="text-sm">Show Password</label>
            </div>
            <div className="flex place-content-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={(e) => handleEnterLogin(e)}
              >
                Login
              </button>
            </div>
            <div className="text-sm text-center mt-3">
              <p>
                {`Don't have an account ? sign up `}
                <button onClick={() => setShowSignupForm(true)}>here</button>
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

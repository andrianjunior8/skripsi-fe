import React from "react";

const Signup = () => {
  return (
    <div className=" w-screen h-screen bg-slate-200 grid place-content-center">
      <form className="bg-white shadow-md rounded px-5 pt-5 pb-5 mb-5 w-96">
        <div className=" m-2 p-2">
          <p className="font-semibold text-3xl">Sign up</p>
          <p className="py-4">Become a member</p>
        </div>
        <div className="w-full  max-w-xs">
          <div className="mb-4 py-1">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Full Name"
            ></input>
            <p className="text-xs text-red-500">uhuy</p>
          </div>

          <div className="mb-4 py-1">
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="User Name"
              ></input>
            </div>
          </div>
          <div className="mb-4 py-1">
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone Number"
              ></input>
            </div>
          </div>
          <div className="mb-4 py-1">
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Password"
              ></input>
            </div>
          </div>
          <div className="mb-4 py-1">
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Confirm Password"
              ></input>
            </div>
          </div>
          <div className="mb-4 py-1">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;

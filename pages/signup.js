import React, { useState } from "react";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [fullnameMessage, setFullNameMessage] = useState("");
  const [username, setUsername] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameMessage, setFirstNameMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberMessage, setPhoneNumberMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  function registerValidation() {
    if (fullName === "") {
      setFullNameMessage("Full Name Must Be Filled!");
    } else {
      setFullNameMessage("");
    }
    if (username == "") {
      setUsernameMessage("Username Must Be Filled!");
    } else {
      setUsernameMessage("");
    }
    if (phoneNumber === "") {
      setPhoneNumberMessage("Phone Number Must Be Filled!");
    } else {
      setPhoneNumberMessage("");
    }
    if (password === "") {
      setPasswordMessage("Password Must Be Filled!");
    } else {
      setPasswordMessage("");
    }
    if (password !== confirmPassword) {
      setConfirmPasswordMessage("Passsword does not match");
    } else {
      setConfirmPasswordMessage("");
    }
  }

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
              value={fullName}
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            <p className="text-xs text-red-500">{fullnameMessage}</p>
          </div>

          <div className="mb-4 py-1">
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <p className="text-xs text-red-500">{usernameMessage}</p>
            </div>
          </div>
          <div className="mb-4 py-1">
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
              <p className="text-xs text-red-500">{phoneNumberMessage}</p>
            </div>
          </div>
          <div className="mb-4 py-1">
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <p className="text-xs text-red-500">{passwordMessage}</p>
            </div>
          </div>
          <div className="mb-4 py-1">
            <div>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
              <p className="text-xs text-red-500">{confirmPasswordMessage}</p>
            </div>
          </div>
          <div className="mb-4 py-1">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={() => registerValidation()}
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

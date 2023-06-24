import { number } from "prop-types";
import React, { useState, useCallback, useEffect } from "react";
import api from "../services/api/core";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import {
  Box,
  Button,
  Collapse,
  Grid,
  InputAdornment,
  Link,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
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
  const [showResponseToast, setShowResponseToast] = useState(false);
  const [textToast, setTextToast] = useState("");

  var usernameValidation;

  function registerValidation() {
    var validation = true;
    if (username === "") {
      setUsernameMessage("Username Must Be Filled!");
      validation = false;
    } else {
      setUsernameMessage("");
    }
    if (firstName === "") {
      setFirstNameMessage("First Name Must Be Filled!");
      validation = false;
    } else {
      setFirstNameMessage("");
    }
    if (lastName === "") {
      setLastNameMessage("Last Name Must Be Filled!");
    } else {
      setLastNameMessage("");
    }
    if (phoneNumber === "") {
      setPhoneNumberMessage("Phone Number Must Be Filled!");
      validation = false;
    } else {
      setPhoneNumberMessage("");
    }
    if (password === "") {
      setPasswordMessage("Password Must Be Filled!");
      validation = false;
    } else {
      setPasswordMessage("");
    }
    if (password !== confirmPassword) {
      setConfirmPasswordMessage("Passsword does not match");
      validation = false;
    } else {
      setConfirmPasswordMessage("");
    }

    if (validation == true) {
      console.log("Validation Pass");
      debounceCreateAccount();
    } else {
      console.log("Validation Rejected");
    }
  }

  function handlePhoneNumber(e) {
    var numberRegex = /[0-9]/;
    console.log("east", numberRegex.test(e.target.value));
    if (numberRegex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  }

  const debounceMountCheckUsername = useCallback(
    debounce(mountCheckUsername, 400)
  );

  async function mountCheckUsername(value) {
    try {
      const parameter = {
        username: value,
      };

      console.log("[PAYLOAD][CHECK][USER]", parameter);

      const checkUser = await api.checkUsername(parameter);

      const { data } = checkUser.data;
      if (data == "USERNAME CAN BE USE") {
        usernameValidation = true;
      } else if (data == "USERNAME ALREADY USED") {
        usernameValidation = false;
      }

      if (value == "") {
        setUsernameMessage("Username Must Be Filled!");
        setUsernameError(true);
      } else if (usernameValidation == false) {
        setUsernameMessage("Username Already Exist!");
        setUsernameError(true);
      } else if (value.length <= 7) {
        setUsernameMessage("Username Must be more than 7 character!");
        setUsernameError(true);
      } else {
        setUsernameMessage("");
        setUsernameError(false);
      }
    } catch (error) {
      console.log("ERROR LOGIN", error);
    }
  }

  const debounceCreateAccount = useCallback(debounce(createAccountUser, 400));

  async function createAccountUser() {
    try {
      const payload = {
        user_name: username,
        phone_number: "0" + phoneNumber,
        pass_word: password,
        role_id: 1,
        first_name: firstName,
        last_name: lastName,
      };

      console.log(payload);

      const createAccount = await api.createAccountUser(payload);
      console.log("createAccount", createAccount);
      const { data } = createAccount.data;
      console.log("data", data);
      if (data == "SUCCESS") {
        setTextToast("SUCCESS");
        setShowResponseToast(true);
        router.push("/login");
      } else if (data == "FAILED") {
        setTextToast("FAILED");
        setShowResponseToast(true);
      }
    } catch (error) {
      console.log("ERROR LOGIN", error);
    }
  }

  async function validateUsername(e) {
    var value = e.target.value;
    setUsername(value);
    debounceMountCheckUsername(value);
  }

  return (
    <div className=" w-screen h-screen bg-gradient-to-b from-slate-200 to-slate-100 grid place-content-center">
      <form className="bg-white shadow-md rounded px-5 pt-5 pb-5 mb-5 w-96">
        <div className=" m-2 p-2">
          <div className="mb-5 flex items-center">
            <Link href="/dashboard">
              <ArrowBackIcon className="text-black"></ArrowBackIcon>
            </Link>
            <label className="text-sm text-black font-semibold ml-2">
              <Link href="/login" className="no-underline text-black">
                Back to Home Page
              </Link>
            </label>
          </div>
          <p className="font-bold text-3xl">Signup</p>
          <p className="mt-1 text-gray-700 text-sm">Become a Member</p>
        </div>
        <div className="w-full ml-3 max-w-xs">
          <Grid className="columns-2">
            <div className="mb-4 py-1">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstname"
                type="text"
                size="small"
                value={firstName}
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              ></TextField>
              <p className="text-xs text-red-500">{firstNameMessage}</p>
            </div>
            <div className="mb-4 py-1">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                type="text"
                size="small"
                value={lastName}
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              ></TextField>
              <p className="text-xs text-red-500">{lastNameMessage}</p>
            </div>
          </Grid>
          <div className="mb-4 py-1">
            <div>
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                label="Username"
                size="small"
                value={username}
                error={usernameError}
                onChange={(e) => validateUsername(e)}
              ></TextField>
              <p className="text-xs text-red-500">{usernameMessage}</p>
            </div>
          </div>
          <div className="mb-4 py-1">
            <div>
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+62</InputAdornment>
                  ),
                }}
                value={phoneNumber}
                label="Phone Number"
                onChange={(e) => handlePhoneNumber(e)}
              ></TextField>
              <p className="text-xs text-red-500">{phoneNumberMessage}</p>
            </div>
          </div>
          <div className="mb-4 py-1">
            <div>
              <TextField
                className="shadow appearance-none border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                label="Password"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
              <p className="text-xs text-red-500">{passwordMessage}</p>
            </div>
          </div>
          <div className="mb-4 py-1">
            <div>
              <TextField
                className="shadow appearance-none border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                label="Confirm Password"
                size="small"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></TextField>
              <p className="text-xs text-red-500">{confirmPasswordMessage}</p>
            </div>
          </div>
          <div className="mb-4 py-1">
            <button
              className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={() => registerValidation()}
              disabled={""}
            >
              Create Account
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm">
              {"Already Have an Account? "}
              <button
                type="button"
                className="text-red-900 font-bold"
                onClick={() => router.push("/login")}
              >
                Login Here
              </button>
            </p>
          </div>
        </div>
      </form>
      <Collapse in={showResponseToast}>
        {textToast === "SUCCESS" ? (
          <Box className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800">
            <p className="p-2 text-white">{"Success create account"}</p>
            <Button
              variant="contained"
              onClick={() => setShowResponseToast(false)}
            >
              X
            </Button>
          </Box>
        ) : (
          <Box className="border border-red-300 fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800">
            <p className="p-2 text-white">{"Failed to create account"}</p>
            <Button
              variant="contained"
              onClick={() => setShowResponseToast(false)}
            >
              X
            </Button>
          </Box>
        )}
      </Collapse>
    </div>
  );
};

export default Signup;

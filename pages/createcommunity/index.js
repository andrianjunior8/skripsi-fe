import React, { useState, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Label } from "@mui/icons-material";

const addCommunity = () => {
  return (
    <div className="">
      <div className="w-screen h-screen bg-slate-50 grid place-content-center justify-center ">
        <div className="bg-white shadow-md rounded p-10">
          <div className="text-center pb-2 ">
            <h2 className="text-red-900 "> YOUR COMMUNITY </h2>
          </div>

          <div className="pt-5">
            <TextField
              className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nameTeam"
              type="text"
              label="Name"
            ></TextField>
          </div>

          <div className="pt-5">
            <TextField
              className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="locationTeam"
              type="text"
              label="Location"
            ></TextField>
          </div>

          <div className="pt-5">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sports</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sports"
              >
                <MenuItem value={1}>Futsal</MenuItem>
                <MenuItem value={2}>Badminton</MenuItem>
                <MenuItem value={3}>Football</MenuItem>
                <MenuItem value={4}>Basketball</MenuItem>
                <MenuItem value={5}>Mini Soccer</MenuItem>
                <MenuItem value={6}>Tennis</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="pt-5 pb-5">
            <label className="text-sm text-gray-600">Add Logo:</label>
            <div>
              <input
                type="file"
                id="myFile"
                name="filename"
                className="pt-2"
              ></input>
            </div>
          </div>

          <div className="pt-5">
            <button
              className="bg-red-900 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="bg-red-900 text-center p-10">
        <label className="text-white text-center font-bold">
          SehatRaga Â©2023
        </label>
      </div>
    </div>
  );
};

export default addCommunity;

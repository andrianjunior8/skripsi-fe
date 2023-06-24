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

const CreateCommunity = () => {
  return (
    <div className="w-screen h-auto absolute bg-slate-100">
      <div className="w-screen pl-10 pr-10">
        <div className="mx-auto max-w-xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl ">
            <div className="text-center pb-2 ">
              <h3 className=""> YOUR COMMUNITY </h3>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nameTeam"
                size="small"
                type="text"
                label="Name"
              ></TextField>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="locationTeam"
                size="small"
                type="text"
                label="Location"
              ></TextField>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" size="small">
                  Sports
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="Sports"
                >
                  <MenuItem value={1}>SEPAK BOLA</MenuItem>
                  <MenuItem value={2}>FUTSAL</MenuItem>
                  <MenuItem value={3}>BADMINTON</MenuItem>
                  <MenuItem value={4}>TENNIS</MenuItem>
                  <MenuItem value={5}>BASKET</MenuItem>
                  <MenuItem value={5}>VOLI</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="outlined-multiline-static"
                label="Description"
                size="small"
                multiline
                rows={4}
              />
            </div>

            <div className="pt-5 pb-5 pl-10 pr-10">
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

            <div className="pt-5 mb-10 pl-10 pr-10">
              <button
                className="bg-red-900 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                size="small"
              >
                CREATE
              </button>
            </div>
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

export default CreateCommunity;

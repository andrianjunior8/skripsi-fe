import {
  Box,
  Button,
  Collapse,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import React, { useCallback, useEffect, useState } from "react";

const UpdateVenue = () => {
  return (
    <div className="w-screen h-auto absolute bg-slate-100">
      <div className="w-screen pl-10 pr-10">
        <div className="mx-auto max-w-xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl ">
            <div className="text-center pb-2 ">
              <h3 className=""> UPDATE VENUE </h3>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                size="small"
                label="Name"
              ></TextField>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                size="small"
                type="text"
                label="Price"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rp</InputAdornment>
                  ),
                }}
              ></TextField>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                label="Description"
                size="small"
                multiline
                rows={4}
              />
            </div>

            <div className="pt-5 pb-5 pl-10 pr-10">
              <label className="text-sm text-gray-600">Change Image:</label>
              <div>
                <input type="file" className="pt-2"></input>
              </div>
            </div>

            <div className="pt-5 mb-10 pl-10 pr-10">
              <button
                className="bg-red-900 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                size="small"
              >
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateVenue;

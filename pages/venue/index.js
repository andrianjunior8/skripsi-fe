/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const Venue = () => {
  const [type, setType] = useState("");
  return (
    <div className="h-auto w-screen bg-white grid">
      <div className="mt-20">
        <div className="absolute left-11 mt-12">
          <div className=" w-80 h-auto rounded-lg bg-white border border-gray-300">
            <div className="p-3">
              <div>
                <p className="font-bold text-2xl text-[#1d1d1c]">Sport</p>
              </div>
              <div class="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
              <div className="flow-root">
                <p className="float-left text-lg text-[#1d1d1c]">Sepak Bola</p>
                <p className="float-right text-lg text-[#1d1d1c]">2</p>
              </div>
              <div className="flow-root">
                <div className="float-left text-lg text-[#1d1d1c]">Futsal</div>
                <div className="float-right text-lg text-[#1d1d1c]">5</div>
              </div>
              <div className="flow-root">
                <div className="float-left text-lg text-[#1d1d1c]">
                  Badminton
                </div>
                <div className="float-right text-lg text-[#1d1d1c]">1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 ml-[26rem]">
          <div className="mb-7">
            <p className="text-lg font-bold">Home/Venue</p>
          </div>
          <div className="w-full mb-7 flex">
            <div class="flex items-stretch">
              <TextField
                variant="outlined"
                size="small"
                label="Nama Venue"
                className="bg-white w-full"
              >
                Nama Venue
              </TextField>
              <TextField
                variant="outlined"
                size="small"
                className="ml-2 w-full"
                label="Lokasi"
              ></TextField>

              <FormControl size="small" className="w-full ml-2" fullWidth>
                <InputLabel size="small">Type</InputLabel>
                <Select
                  size="small"
                  label="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={1}>Futsal</MenuItem>
                  <MenuItem value={2}>Badminton</MenuItem>
                </Select>
              </FormControl>
              <Button variant="outlined" className="ml-2">
                <SearchIcon></SearchIcon>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-0 gap-y-4 ">
            <div className="max-w-lg rounded hover:shadow-2xl border border-gray-300 overflow-hidden bg-white ">
              <img
                src={`/rama.jpeg`}
                alt="futsal"
                className="overflow-hidden w-auto h-96-"
                width={500}
                height={500}
              ></img>
              <Box className="p-3">
                <p className="text-left mt-1 mb-3 text-lg font-bold">
                  Bintang Rama Futsal
                </p>
                <Box className="grid grid-cols-3">
                  <Typography className="w-auto text-center border bg-green-500 text-white rounded-md">
                    Futsal
                  </Typography>

                  <Typography className="w-auto text-center border bg-purple-500 text-white rounded-md">
                    Badminton
                  </Typography>
                </Box>
                <Box className="flex items-stretch  my-2">
                  <Grid className="item">
                    <p className="font-bold mr-6">Bekasi Timur</p>
                  </Grid>
                  <Grid className="item">
                    <StarIcon sx={{ fontSize: 20, color: "yellow" }}></StarIcon>
                  </Grid>
                  <Typography>5.0</Typography>
                </Box>

                <p className="p-1">Mulai dari Rp180.000 / Jam</p>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96"></div>
    </div>
  );
};

export default Venue;

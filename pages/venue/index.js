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
import React, { useState, useCallback, useEffect } from "react";
import { debounce } from "lodash";
import venue from "../../services/api/venue";
import { useRouter } from "next/router";

const Venue = () => {
  const [type, setType] = useState("");
  const [listAllVenue, setListAllVenue] = useState([]);
  const [listTipeVenue, setListTipeVenue] = useState([]);
  const [namaVenue, setNamaVenue] = useState("");
  const [cityVenue, setCityVenue] = useState("");

  const router = useRouter();

  const dbGetAllVenue = useCallback(debounce(mtGetAllVenue, 400));

  async function mtGetAllVenue() {
    try {
      const getvenue = await venue.getAllVenue();

      const { data } = getvenue.data;

      console.log("[GetAllVenue]:", data.Tags);
      if (data != null) {
        setListAllVenue(data);
      } else {
        setListAllVenue([]);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  const dbGetTotalTipeVenue = useCallback(debounce(mtGetTotalTipeVenue, 400));

  async function mtGetTotalTipeVenue() {
    try {
      const getTotal = await venue.getTotalTipeVenue();

      const { data } = getTotal.data;

      console.log("[GetTotalTipeVenue]:", data);
      if (data != null) {
        setListTipeVenue(data);
      } else {
        setListTipeVenue([]);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  const debounceMountSearchVenue = useCallback(debounce(mountSearchVenue, 400));

  async function mountSearchVenue() {
    try {
      const parameter = {
        name: namaVenue,
        location: cityVenue,
        tipe: type,
      };

      const searchVen = await venue.searchVenue(parameter);
      console.log("[searchVen]", searchVen);
      const { data } = searchVen.data;
      if (data != null) {
        setListAllVenue(data);
      } else {
        setListAllVenue([]);
        console.log("data null");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  useEffect(() => {
    dbGetAllVenue();
    dbGetTotalTipeVenue();
  }, []);

  useEffect(() => {
    console.log("namaVenue", namaVenue);
    console.log("cityVenue", cityVenue);
    console.log("type", type);
  }, [namaVenue, cityVenue, type]);

  return (
    <div className="h-auto w-screen bg-slate-100 grid">
      <div className="mt-20">
        <div className="absolute left-11 mt-12">
          <div className=" w-80 h-auto rounded-lg bg-white border border-gray-300">
            <div className="p-3">
              <div>
                <p className="font-bold text-2xl text-[#1d1d1c]">Sport</p>
              </div>
              <div class="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
              {listTipeVenue &&
                listTipeVenue.map((item, index) => (
                  <div className="flow-root" key={index}>
                    <p className="float-left text-lg text-[#1d1d1c]">
                      {item.venue_type_name}
                    </p>
                    <p className="float-right text-lg text-[#1d1d1c]">
                      {item.total_place}
                    </p>
                  </div>
                ))}
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
                className="w-full"
                value={namaVenue}
                onChange={(e) => setNamaVenue(e.target.value)}
              >
                Nama Venue
              </TextField>
              <TextField
                variant="outlined"
                size="small"
                className="ml-2 w-full"
                label="Lokasi"
                onChange={(e) => setCityVenue(e.target.value)}
                value={cityVenue}
              ></TextField>

              <FormControl size="small" className="w-full ml-2" fullWidth>
                <InputLabel size="small">Type</InputLabel>
                <Select
                  size="small"
                  label="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={1}>SEPAK BOLA</MenuItem>
                  <MenuItem value={2}>FUTSAL</MenuItem>
                  <MenuItem value={3}>BADMINTON</MenuItem>
                  <MenuItem value={4}>TENNIS</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="outlined"
                className="ml-2"
                onClick={() => debounceMountSearchVenue()}
              >
                <SearchIcon></SearchIcon>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-4 gap-y-4">
            {listAllVenue &&
              listAllVenue.map((item, index) => (
                <div
                  className="max-w-lg rounded hover:shadow-2xl border border-gray-300 overflow-hidden bg-white"
                  key={index}
                  onClick={() =>
                    router.push({
                      pathname: `/venue/${item.venue_id}`,
                    })
                  }
                >
                  <img
                    src={`${item.venue_img_source}`}
                    alt="futsal"
                    className="object-none h-40 w-full rounded"
                    width={500}
                    height={500}
                  ></img>

                  <Box className="p-3">
                    <p className="text-left mt-1 mb-3 text-lg font-bold">
                      {item.venue_name}
                    </p>
                    <Box className="grid grid-cols-3">
                      {item.Tags.map((item, index) => (
                        <Typography
                          key={index}
                          className="w-auto text-center border bg-green-500 text-white rounded-md text-[10px]"
                        >
                          {item.venue_type_name}
                        </Typography>
                      ))}

                      {/* <Typography className="w-auto text-center border bg-purple-500 text-white rounded-md">
                        Badminton
                      </Typography> */}
                    </Box>
                    <Box className="flex items-stretch  my-2">
                      <Grid className="item">
                        <p className="font-bold mr-6">{item.venue_city}</p>
                      </Grid>
                    </Box>
                    <p className="p-1">
                      {"Opens from "}
                      {item.venue_opentime}
                      {" - "}
                      {item.venue_closetime}
                    </p>
                    <p className="p-1">Mulai dari Rp{item.lowest_price}</p>
                  </Box>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="h-96"></div>
    </div>
  );
};

export default Venue;

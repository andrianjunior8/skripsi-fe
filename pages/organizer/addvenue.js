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
import api from "../../services/api/venue";
import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/router";

const AddVenue = () => {
  const [namaVenue, setNamaVenue] = useState("");
  const [type, setType] = useState(0);
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [textToast, setTextToast] = useState("");
  const [showResponseToast, setShowResponseToast] = useState(false);

  const [file, setFile] = useState();
  const [base64, setBase64] = useState("");
  const [venueid, setVenueID] = useState("");
  const [fileReader, setFileReader] = useState();

  const router = useRouter();

  useEffect(() => {
    setVenueID(localStorage.getItem("venueid"));
    setFileReader(new FileReader());
  }, [!router.isReady]);

  useEffect(() => {
    console.log("file", file);
    if (file != null) {
      fileReader.readAsDataURL(file);
      fileReader.onload = function () {
        setBase64(fileReader.result);
      };
    }
  }, [file]);

  const debounceCreateVenueDetail = useCallback(
    debounce(createVenueDetail, 400)
  );

  async function createVenueDetail() {
    try {
      const payload = {
        venue_id: venueid,
        venue_detail_name: namaVenue,
        venue_typeid: parseInt(type),
        venue_price: parseFloat(price),
        venue_description: desc,
        venue_img_source: base64,
      };

      console.log(payload);

      const createvenue = await api.createVenueDetail(payload);
      console.log("createvenue", createvenue);
      const { data } = createvenue.data;
      console.log("data", data);
      if (data === "SUCCESS") {
        setTextToast("SUCCESS");
        setShowResponseToast(true);
        router.push("/organizer/dashboard");
      } else if (data === "FAILED") {
        setTextToast("FAILED");
        setShowResponseToast(true);
      }
    } catch (error) {
      console.log("ERROR LOGIN", error);
    }
  }
  return (
    <div className="w-screen h-auto absolute bg-slate-100">
      <div className="w-screen pl-10 pr-10">
        <div className="mx-auto max-w-xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl ">
            <div className="text-center pb-2 ">
              <h3 className=""> TAMBAH VENUE </h3>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setNamaVenue(e.target.value)}
                size="small"
                label="Name"
              ></TextField>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" size="small">
                  Sports
                </InputLabel>
                <Select
                  label="Sports"
                  size="small"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value={1}>SEPAK BOLA</MenuItem>
                  <MenuItem value={2}>FUTSAL</MenuItem>
                  <MenuItem value={3}>BADMINTON</MenuItem>
                  <MenuItem value={4}>TENNIS</MenuItem>
                  <MenuItem value={5}>MINI SOCCER</MenuItem>
                  <MenuItem value={6}>BASKET</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                size="small"
                type="text"
                label="Price"
                onChange={(e) => setPrice(e.target.value)}
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
                onChange={(e) => setDesc(e.target.value)}
                label="Description"
                size="small"
                multiline
                rows={4}
              />
            </div>

            <div className="pt-5 pb-5 pl-10 pr-10">
              <label className="text-sm text-gray-600">Tambah Foto:</label>
              <div>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="pt-2"
                ></input>
              </div>
            </div>

            <div className="pt-5 mb-10 pl-10 pr-10">
              <button
                className="bg-red-900 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={() => debounceCreateVenueDetail()}
                size="small"
              >
                BUAT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <Box className=" p-7">
        <Grid>
          <Typography fontSize={40} fontWeight="bold" className="text-center">
            ADD VENUE
          </Typography>
        </Grid>
        <Grid className="m-10">
          <TextField
            variant="outlined"
            size="small"
            label="Nama Lapangan"
            onChange={(e) => setNamaVenue(e.target.value)}
          ></TextField>
        </Grid>
        <Grid className="m-10">
          <FormControl size="small" className="w-40">
            <InputLabel>Tipe Olahraga</InputLabel>
            <Select
              label="Tipe Olahraga"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={1}>Futsal</MenuItem>
              <MenuItem value={2}>Basket</MenuItem>
              <MenuItem value={3}>Voli</MenuItem>
              <MenuItem value={4}>Badminton</MenuItem>
              <MenuItem value={5}>Sepak Bola</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className="m-10">
          <TextField
            variant="outlined"
            label="Price"
            size="small"
            onChange={(e) => setPrice(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rp</InputAdornment>
              ),
            }}
          ></TextField>
        </Grid>
        <Grid className="m-10">
          <TextField
            variant="outlined"
            multiline
            minRows={3}
            fullWidth
            onChange={(e) => setDesc(e.target.value)}
            label="Deskripsi"
          ></TextField>
        </Grid>

        <Grid>
          <label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </label>
        </Grid>
        <Grid>
          <img src="" alt="Angular" />
        </Grid>
        <Grid className="text-center">
          <Button
            variant="contained"
            className="bg-blue-500"
            onClick={() => debounceCreateVenueDetail()}
          >
            Create
          </Button>
        </Grid>
      </Box> */}

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

export default AddVenue;

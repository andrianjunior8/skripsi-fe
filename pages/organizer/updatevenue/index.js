import {
  Alert,
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
import venueApi from "../../../services/api/venue";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { debounce } from "lodash";

const UpdateVenue = () => {
  const [detailCode, setDetailCode] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [fileReader, setFileReader] = useState();
  const [base64, setBase64] = useState("");
  const [file, setFile] = useState();
  const [venueID, setVenueID] = useState("");
  const [berhasilUpdate, setBerhasilUpdate] = useState(false);
  const [gagalUpdate, setGagalUpdate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { detailcode } = router.query;
    console.log("router", router);

    const venueID = localStorage.getItem("venueid");
    debounceMountGetVenue(venueID, detailcode);
    setFileReader(new FileReader());
  }, [router.isReady]);

  useEffect(() => {
    console.log("file", file);
    if (file != null) {
      fileReader.readAsDataURL(file);
      fileReader.onload = function () {
        setBase64(fileReader.result);
        setImage(fileReader.result);
      };
    }
  }, [file]);

  const debounceMountGetVenue = useCallback(debounce(mountGetVenue, 400));

  async function mountGetVenue(value, detailcode) {
    try {
      const parameter = {
        venueid: value,
      };

      console.log("parameter", parameter);

      const getVenue = await venueApi.getVenue(parameter);
      console.log("getVenue", getVenue);
      const { data } = getVenue.data;
      if (data != null && data != undefined) {
        for (let i = 0; i < data.Detail.length; i++) {
          if (data.Detail[i].venue_detailcode === detailcode) {
            setVenueID(data.Detail[i].venue_id);
            setName(data.Detail[i].venue_detail_name);
            setImage(data.Detail[i].venue_img_source);
            setDescription(data.Detail[i].venue_description);
            setPrice(data.Detail[i].venue_price);
            setDetailCode(data.Detail[i].venue_detailcode);
            console.log(data.Detail[i].venue_detailcode);
          }
        }
      } else {
        console.log("data null");
      }
    } catch (error) {
      console.log("ERROR LOGIN", error);
    }
  }

  const debounceMountUpdateVenue = useCallback(debounce(mountUpdateVenue, 400));

  async function mountUpdateVenue() {
    try {
      const parameter = {
        venue_id: venueID,
        venue_detail_name: name,
        venue_price: parseFloat(price),
        venue_description: description,
        venue_detailcode: detailCode,
        venue_img_source: image,
      };

      console.log("parameter", parameter);

      const updateVenue = await venueApi.updateVenue(parameter);
      console.log("updateVenue", updateVenue);
      const { data } = updateVenue.data;
      if (data === "SUCCESS") {
        setBerhasilUpdate(true);
        setGagalUpdate(false);
      } else {
        console.log("data null");
        setBerhasilUpdate(false);
        setGagalUpdate(true);
      }
    } catch (error) {
      console.log("ERROR updateVenue", error);
    }
  }

  return (
    <div className="w-screen h-auto absolute bg-slate-100">
      <div className="w-screen pl-10 pr-10">
        <div className="mx-auto max-w-xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <Collapse in={berhasilUpdate}>
            <Alert severity="success" className="mb-2">
              Berhasil Update
            </Alert>
          </Collapse>
          <Collapse in={gagalUpdate}>
            <Alert severity="error" className="mb-2">
              Gagal Update
            </Alert>
          </Collapse>

          <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl ">
            <div className="text-center pb-2 ">
              <h3 className=""> UPDATE VENUE </h3>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                size="small"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                size="small"
                type="text"
                label="Price"
                value={price}
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
                label="Description"
                size="small"
                multiline
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>

            <div className="pt-5 pl-10 pr-10">
              <img
                src={image}
                alt="venue"
                className="object-fill h-1/2 w-full rounded"
              ></img>
            </div>

            <div className="pt-5 pb-5 pl-10 pr-10">
              <label className="text-sm text-gray-600">Ganti Gambar:</label>
              <div>
                <input
                  type="file"
                  className="pt-2"
                  onChange={(e) => setFile(e.target.files[0])}
                ></input>
              </div>
            </div>

            <div className="pt-5 mb-10 pl-10 pr-10">
              <button
                className="bg-red-900 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={() => debounceMountUpdateVenue()}
                size="small"
              >
                PERBARUI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateVenue;

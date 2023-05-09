import {
  Box,
  Button,
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
import React, { useCallback, useState } from "react";
import { debounce } from "lodash";

const AddVenue = () => {
  const [namaVenue, setNamaVenue] = useState("");
  const [type, setType] = useState(0);
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");

  const debounceCreateVenueDetail = useCallback(
    debounce(createVenueDetail, 400)
  );

  async function createVenueDetail() {
    try {
      const payload = {
        venue_id: "321223sd",
        venue_detail_name: namaVenue,
        venue_typeid: parseInt(type),
        venue_price: parseFloat(price),
        venue_description: desc,
      };

      console.log(payload);

      const createvenue = await api.createVenueDetail(payload);
      console.log("createvenue", createvenue);
      const { data } = createvenue.data;
      console.log("data", data);
      if (data == "SUCCESS") {
        setTextToast("SUCCESS");
        setShowResponseToast(true);
      } else if (data == "FAILED") {
        setTextToast("FAILED");
        setShowResponseToast(true);
      }
    } catch (error) {
      console.log("ERROR LOGIN", error);
    }
  }
  return (
    <div className="bg-white w-screen h-screen py-20">
      <Box className=" p-7">
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

        <Grid className="text-center">
          <Button
            variant="contained"
            className="bg-blue-500"
            onClick={() => debounceCreateVenueDetail()}
          >
            Create
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default AddVenue;

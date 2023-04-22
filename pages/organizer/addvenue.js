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
import React, { useState } from "react";

const AddVenue = () => {
  const [type, setType] = useState("");

  return (
    <div className="bg-white w-screen h-screen py-20">
      <Box className=" p-7">
        <Grid className="m-10">
          <TextField variant="outlined" label="Nama Lapangan"></TextField>
        </Grid>
        <Grid className="m-10">
          <FormControl fullWidth>
            <InputLabel>Tipe Olahraga</InputLabel>
            <Select
              label="Tipe Olahraga"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="1">Futsal</MenuItem>
              <MenuItem value="2">Basket</MenuItem>
              <MenuItem value="3">Voli</MenuItem>
              <MenuItem value="4">Badminton</MenuItem>
              <MenuItem value="5">Sepak Bola</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className="m-10">
          <TextField
            variant="outlined"
            label="Price"
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
            label="Deskripsi"
          ></TextField>
        </Grid>

        <Grid className="text-center">
          <Button variant="contained" className="bg-blue-500">
            Create
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default AddVenue;

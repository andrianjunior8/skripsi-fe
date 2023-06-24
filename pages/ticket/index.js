import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const Ticket = () => {
  const [status, setStatus] = useState("WAITING");
  return (
    <div className="w-screen h-auto absolute bg-slate-100">
      <div className="mt-28 w-screen place-content-center justify-center grid">
        <Grid className="">
          <Typography className="text-xl font-bold text-center">
            My Ticket
          </Typography>
        </Grid>
        <Box className="bg-white w-[800px] h-auto m-10 p-10 border rounded shadow-md">
          <div className="grid grid-cols-2">
            <div>
              <Grid>{"Venue Name : Lapangan Futsal Rama"}</Grid>
              <Grid>{"Venue Detail : Lapangan Dua"}</Grid>
              <Grid>{"Book Date : 29 June 2023"}</Grid>
              <Grid>{"Book Hour : 07:00 - 08:00 | 09:00 - 10:00"}</Grid>
              <Grid>{"Price : Rp 20.000.000"}</Grid>
              <Grid>{"Payment Type : CASH"}</Grid>
            </div>
            <div className="text-center flex justify-center items-center border border-1">
              <div>
                <Typography className="">{"Status : "}</Typography>
              </div>
              <div className="ml-2">
                {status === "WAITING" ? (
                  <Typography className="text-yellow-600 font-bold">
                    WAITING
                  </Typography>
                ) : status === "ACCEPT" ? (
                  <Typography className="text-green-600 font-bold">
                    ACCEPTED
                  </Typography>
                ) : (
                  <Typography className="text-red-600 font-bold">
                    DECLINED
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Ticket;

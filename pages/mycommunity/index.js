import {
  Box,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import teamApi from "../../services/api/team";
import { debounce } from "lodash";
import dayjs from "dayjs";

const MyCommunity = () => {
  const [listTeam, setListTeam] = useState([]);

  const dbGetAllTeam = useCallback(debounce(mtGetAllTeam, 400));

  useEffect(() => {
    dbGetAllTeam();
  }, []);
  async function mtGetAllTeam() {
    try {
      const newParams = {
        tipe: "",
        limit: 20,
        offset: 0,
      };
      const getTeam = await teamApi.getMyTeam(newParams);

      const { data } = getTeam.data;

      console.log("[getAllTeam]:", data);
      if (data != null) {
        setListTeam(data);
      } else {
        setListTeam([]);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  return (
    <div className="w-screen h-auto absolute bg-slate-100">
      <div className="mt-28 w-screen place-content-center justify-center grid">
        <Grid className="">
          <Typography className="text-xl font-bold text-center">
            My Community
          </Typography>
        </Grid>
        {listTeam &&
          listTeam.map((item, index) => (
            <Box
              key={index}
              className="bg-white w-[800px] h-auto m-5 p-10 border rounded shadow-md"
            >
              <div className="grid grid-cols-2  justify-center items-center">
                <div className="text-center align-middle justify-center">
                  <img
                    src={item.team_logo_img}
                    alt="logo"
                    className="object-fill h-20 w-20 rounded"
                    width={300}
                    height={300}
                  ></img>
                </div>
                <div>
                  <div className="">
                    <Grid>{`Community Name : ${item.team_name}`}</Grid>
                    <Grid>{`Community City   : ${item.team_city}`}</Grid>
                    <Grid>{`Community Desc    : ${item.team_description}`}</Grid>
                    <Grid>{`Community Type    : ${item.venue_type_name}`}</Grid>
                    <Grid>
                      <Button
                        className="mt-4 border bg-red-700 text-white border-red-700  hover:border-red-900 hover:bg-red-900 "
                        variant="outlined"
                      >
                        See Member
                      </Button>{" "}
                    </Grid>
                  </div>
                </div>
              </div>
            </Box>
          ))}
      </div>
    </div>
  );
};

export default MyCommunity;

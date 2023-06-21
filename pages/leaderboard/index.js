import React, { useState, useCallback, useEffect } from "react";
import teamApi from "../../services/api/team";
import { debounce } from "lodash";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Button,
} from "@mui/material";

const Leaderboard = () => {
  const [listTipeVenue, setListTipeVenue] = useState([]);
  const [teamLeaderBoard, setTeamLeaderBoard] = useState([]);

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

  const dbGetAllTeam = useCallback(debounce(mtGetAllTeam, 400));

  async function mtGetAllTeam() {
    try {
      const newParams = {
        tipe: 1,
        limit: 20,
        offset: 0,
      };
      const getTeam = await teamApi.getAllTeam(newParams);

      const { data } = getTeam.data;

      console.log("[getAllTeam]:", data);
      if (data != null) {
        setTeamLeaderBoard(data);
      } else {
        setTeamLeaderBoard([]);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  useEffect(() => {
    dbGetTotalTipeVenue();
    dbGetAllTeam();
  }, []);

  return (
    <div className="w-screen h-screen bg-white grid">
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
        <div className="mt-12 ml-96 p-4">
          <div className="mb-7">
            <p className="text-lg font-bold font-mono">Home/Leaderboard</p>
          </div>
          <div className="text-center text-2xl font-bold font-mono">
            Top 20 Team
          </div>
          <Paper elevation={3} sx={{ overflow: "hidden", p: 2 }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Team Name</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Matches</TableCell>
                    <TableCell>Win</TableCell>
                    <TableCell>Lose</TableCell>
                    <TableCell>Draw</TableCell>
                    <TableCell>Points</TableCell>
                    {/* <TableCell>Action</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {teamLeaderBoard &&
                    teamLeaderBoard.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.team_name}</TableCell>
                        <TableCell>{item.team_city}</TableCell>
                        <TableCell>
                          {item.team_total_win +
                            item.team_total_lose +
                            item.team_total_draw}
                        </TableCell>
                        <TableCell>{item.team_total_win}</TableCell>
                        <TableCell>{item.team_total_lose}</TableCell>
                        <TableCell>{item.team_total_draw}</TableCell>
                        <TableCell>
                          {item.team_total_win * 2 +
                            item.team_total_lose * -1 +
                            item.team_total_draw}
                        </TableCell>
                        {/* <TableCell>
                          <Button
                            variant="outlined"
                            className="text-center text-lg p-2"
                          >
                            DETAIL
                          </Button>
                        </TableCell> */}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

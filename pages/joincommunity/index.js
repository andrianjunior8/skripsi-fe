import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React, { useState, useCallback, useEffect } from "react";
import teamApi from "../../services/api/team";
import { debounce } from "lodash";
import dayjs from "dayjs";

const MyCommunity = () => {
  const [userID, setUserID] = useState("");
  const [NameUser, setNameUser] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    const userid = localStorage.getItem("userid");
    const name = localStorage.getItem("name");
    setNameUser(name);
    setUserID(userid);
  }, [router.isReady]);

  const [listTeam, setListTeam] = useState([]);
  const [openSeeMember, setOpenSeeMember] = useState(false);

  useEffect(() => {
    dbGetAllTeam();
  }, []);

  const dbGetAllTeam = useCallback(debounce(mtGetAllTeam, 400));

  async function mtGetAllTeam() {
    try {
      const newParams = {
        tipe: "",
        limit: 20,
        offset: 0,
      };
      const getTeam = await teamApi.getAllTeam(newParams);

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

  const debounceMountGetMember = useCallback(debounce(mtGetMember, 400));

  async function mtGetMember() {
    try {
      const newParams = {
        userid: userID,
      };
      const getTeam = await teamApi.getMember(newParams);

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

  function handleSeeMember() {
    debounceMountGetMember();
    setOpenSeeMember(true);
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="w-screen h-auto absolute bg-slate-100">
      <div className="mt-28 w-screen place-content-center justify-center grid">
        <Grid className="">
          <Typography className="text-xl font-bold text-center">
            Join Community
          </Typography>
        </Grid>
        {listTeam &&
          listTeam.map((item, index) => (
            <Box
              key={index}
              className="bg-white w-[800px] h-auto m-5 p-10 border rounded shadow-md"
            >
              <div className="grid grid-cols-2  justify-center items-center">
                <div>
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
                    <Grid className="mt-4">
                      <Button
                        className="border bg-red-700 text-white border-red-700  hover:border-red-900 hover:bg-red-900 "
                        variant="outlined"
                      >
                        Join
                      </Button>{" "}
                      <Button
                        className="border bg-red-700 text-white border-red-700  hover:border-red-900 hover:bg-red-900 "
                        onClick={() => handleSeeMember()}
                      >
                        See Member
                      </Button>
                    </Grid>
                  </div>
                </div>
              </div>
            </Box>
          ))}
      </div>
      <Modal open={openSeeMember}>
        <Box sx={style}>
          <Button
            className="absolute top-2 right-2 bg-red-400 hover:bg-red-600"
            variant="contained"
            onClick={() => setOpenSeeMember(false)}
          >
            X
          </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Payment Confirmation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <Grid className="text-center">
            <Button
              variant={"contained"}
              className="mt-8 border bg-red-700 text-white border-red-700  hover:border-red-900 hover:bg-red-900 "
            >
              PAY
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default MyCommunity;

import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Collapse,
  Alert,
} from "@mui/material";
import api from "../../services/api/team";
import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/router";

const CreateCommunity = () => {
  const [Name, setName] = useState("");
  const [Location, setLocation] = useState("");
  const [TipeSport, setTipeSport] = useState("");
  const [Desc, setDesc] = useState("");
  const [file, setFile] = useState();
  const [base64, setBase64] = useState("");
  const [fileReader, setFileReader] = useState();
  const [berhasilUpdate, setBerhasilUpdate] = useState(false);
  const [gagalUpdate, setGagalUpdate] = useState(false);
  const [userID, setUserID] = useState("");
  const [NameUser, setNameUser] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const userid = localStorage.getItem("userid");
    const name = localStorage.getItem("name");
    setNameUser(name);
    setUserID(userid);
    setFileReader(new FileReader());
  }, [router.isReady]);

  useEffect(() => {
    console.log("file", file);
    if (file != null) {
      fileReader.readAsDataURL(file);
      fileReader.onload = function () {
        setBase64(fileReader.result);
      };
    }
  }, [file]);

  const debounceCreateTeam = useCallback(debounce(createTeam, 400));

  async function createTeam() {
    try {
      const payload = {
        team_name: Name,
        team_typeid: TipeSport,
        team_city: Location,
        team_description: Desc,
        team_logo_img: base64,
        user_id: userID,
        member_name: NameUser,
      };

      console.log(payload);

      const createteam = await api.insertTeam(payload);

      console.log("createteam", createteam);
      const { data } = createteam.data;
      console.log("data", data);
      if (data === "SUCCESS") {
        setBerhasilUpdate(true);
        setGagalUpdate(false);
      } else {
        console.log("data null");
        setBerhasilUpdate(false);
        setGagalUpdate(true);
      }
    } catch (error) {
      console.log("ERROR createteam", error);
    }
  }

  return (
    <div className="w-screen h-auto absolute bg-slate-100">
      <div className="w-screen pl-10 pr-10">
        <div className="mx-auto max-w-xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl ">
            <div className="text-center pb-2 ">
              <h3 className=""> YOUR COMMUNITY </h3>
            </div>

            <Collapse in={berhasilUpdate}>
              <Alert severity="success" className="mb-2">
                Berhasil Insert
              </Alert>
            </Collapse>
            <Collapse in={gagalUpdate}>
              <Alert severity="error" className="mb-2">
                Gagal Insert
              </Alert>
            </Collapse>
            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nameTeam"
                size="small"
                type="text"
                label="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="locationTeam"
                size="small"
                type="text"
                label="Location"
                value={Location}
                onChange={(e) => setLocation(e.target.value)}
              ></TextField>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" size="small">
                  Sports
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="Sports"
                  value={TipeSport}
                  onChange={(e) => setTipeSport(e.target.value)}
                >
                  <MenuItem value={"1"}>SEPAK BOLA</MenuItem>
                  <MenuItem value={"2"}>FUTSAL</MenuItem>
                  <MenuItem value={"3"}>BADMINTON</MenuItem>
                  <MenuItem value={"4"}>TENNIS</MenuItem>
                  <MenuItem value={"5"}>BASKET</MenuItem>
                  <MenuItem value={"6"}>VOLI</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="pt-5 pl-10 pr-10">
              <TextField
                className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="outlined-multiline-static"
                label="Description"
                size="small"
                onChange={(e) => setDesc(e.target.value)}
                multiline
                rows={4}
              />
            </div>

            <div className="pt-5 pb-5 pl-10 pr-10">
              <label className="text-sm text-gray-600">Add Logo:</label>
              <div>
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="pt-2"
                ></input>
              </div>
            </div>

            <div className="pt-5 mb-10 pl-10 pr-10">
              <button
                className="bg-red-900 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                size="small"
                onClick={() => debounceCreateTeam()}
              >
                CREATE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-900 text-center p-10">
        <label className="text-white text-center font-bold">
          SehatRaga ©2023
        </label>
      </div>
    </div>
  );
};

export default CreateCommunity;

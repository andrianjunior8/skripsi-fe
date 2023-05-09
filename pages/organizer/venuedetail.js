import React, { useEffect, useState } from "react";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ToggleButton } from "@mui/material";
import WcSharpIcon from "@mui/icons-material/WcSharp";
import FastfoodSharpIcon from "@mui/icons-material/FastfoodSharp";
import ShowerSharpIcon from "@mui/icons-material/ShowerSharp";

const VenueDetail = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNum] = useState("");

  useEffect(() => {
    console.log(username);
  }, [username]);

  return (
    <div class="bg-white lg:py-16">
      <div class="w-auto flex flex-row bg-[#F3EFE0] rounded-2xl items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-10 mr-28 mb-0 ml-28 ">
        <div class="flex flex-row items-center  w-full pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div class="w-full bg-cover relative max-w-md ml-14 lg:max-w-2xl lg:w-7/12">
            <div class="flex flex-col w-full h-full relative lg:pr-10">
              <img src="https://img.freepik.com/free-vectorhttps://img.freepik.com/free-vector/gradient-style-football-fieldhttps://img.freepik.com/free-vector/realistic-shttps://img.freepik.com/free-vector/soccer-stadium_1284-22432.jpg?w=1380&t=st=1682836609~exp=1682837209~hmac=19514d288b63d69752a7b94bc8e374739b5e6e48820b99da8f85e4fc742372a1occer-football-stadium-illustration_52683-60377.jpg?w=1800&t=st=1682836593~exp=1682837193~hmac=14deb91cbc20fccf8ce71d35b28fa1c56aad7ab8ecca3e07ffdede123ef90558-background_23-2148995842.jpg?w=1380&t=st=1682836576~exp=1682837176~hmac=5b31f5f4c3e302d43c5dffc59123401fe7dabfcf142521f951fb0bd3b85641d1/sport-equipment-concept_1284-13034.jpg?w=826&t=st=1679239330~exp=1679239930~hmac=fa809a1400774ad845b47611fdbcb68bf2a34626d892231458405a0d2417e49c" />
            </div>
          </div>

          <div class=" mt-20 mr-0 mb-0 ml-10 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div
              class="flex flex-col items-start justify-start pt-20 pr-10 pb-10 pl-10 shadow-2xl w-auto rounded-xl
            relative z-10"
            >
              <p class="w-full text-4xl font-medium text-center leading-snug font-serif">
                {" "}
                Lapangan Futsal Elang
              </p>
              <p class="w-full text-m font-medium text-center leading-snug font-serif">
                {" "}
              </p>
              <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-3">
                <div class="relative rounded-2xl text-center  w-16">
                  <div class="flex flex-row w-full h-full relative mr-10 mb-4 lg:pr-10">
                    <LocationOnSharpIcon></LocationOnSharpIcon>
                    Address
                  </div>
                </div>

                <div class="relative rounded-2xl text-center bg-[#FFDB89] w-16">
                  <div class="flex flex-row w-full h-full relative mr-10 lg:pr-10">
                    <StarBorderPurple500SharpIcon></StarBorderPurple500SharpIcon>
                    4.6
                  </div>
                </div>
                <div className="p-5 text-center">
                  Select Date:
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                  <ToggleButtonGroup color="primary" fullWidth="true">
                    <div className="columns-5 w-auto pt-5 ">
                      <ToggleButton value="jam1">08:00-09:00</ToggleButton>
                      <ToggleButton value="jam2">09:00-10:00</ToggleButton>
                      <ToggleButton value="jam3">10:00-11:00</ToggleButton>
                      <ToggleButton value="jam3">11:00-12:00</ToggleButton>
                      <ToggleButton value="jam3">12:00-13:00</ToggleButton>
                      <ToggleButton value="jam3">13:00-14:00</ToggleButton>
                      <ToggleButton value="jam3">14:00-15:00</ToggleButton>
                      <ToggleButton value="jam3">15:00-16:00</ToggleButton>
                      <ToggleButton value="jam3">16:00-17:00</ToggleButton>
                      <ToggleButton value="jam3">17:00-18:00</ToggleButton>
                      <ToggleButton value="jam3">18:00-19:00</ToggleButton>
                      <ToggleButton value="jam3">19:00-20:00</ToggleButton>
                      <ToggleButton value="jam3">20:00-21:00</ToggleButton>
                      <ToggleButton value="jam3">21:00-22:00</ToggleButton>
                      <ToggleButton value="jam3">22:00-23:00</ToggleButton>
                      <ToggleButton value="jam3">23:00-24:00</ToggleButton>
                    </div>
                  </ToggleButtonGroup>
                </div>
                <button className="bg-[#DC0000] items-center justify-center m-auto text-center rounded-xl h-auto text-xl w-28">
                  Book Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto flex flex-col bg-[#F3EFE0] justify-center text-center rounded-2xl ml-20 mr-20 m-10 text-2xl ">
        <div className="mt-10 ">Facilities</div>
        <div className="p-16 rounded-lg bg-[#F3EFE0]">
          <div className="grid grid-cols-3 text-center">
            <div className="flex justify-center">
              <div className="">
                <div>
                  <WcSharpIcon className=""></WcSharpIcon>
                </div>
                <div>
                  <p className="text-2xl font-mono mb-5 mt-2">Toilet</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <div>
                  <FastfoodSharpIcon className=""></FastfoodSharpIcon>
                </div>
                <div>
                  <p className="text-2xl font-mono mb-5 mt-2">Canteen</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="">
                <div>
                  <ShowerSharpIcon className=""></ShowerSharpIcon>
                </div>
                <div>
                  <p className="text-2xl font-mono mb-5 mt-2">Toilet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VenueDetail;

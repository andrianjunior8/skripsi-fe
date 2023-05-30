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
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const PaymentConfirmation = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNum] = useState("");

  useEffect(() => {
    console.log(username);
  }, [username]);

  return (
    <div class="bg-white lg:py-16">
      <div class="w-auto flex flex-row bg-[#F3EFE0] rounded-2xl items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-10 mr-28 mb-0 ml-28 ">
        <div class="flex flex-row items-center  w-full pr-10 pb-20 pl-10 lg:pt-20 lg:flex-col">
          <div class="w-full bg-cover relative max-w-md ml-14 lg:max-w-2xl lg:w-7/12">
            <div class="flex flex-col text-2xl font-bold w-full h-full relative lg:pr-10">
              Order Confirmation{" "}
            </div>
            <div class="flex flex-row text-2xl font-bold w-full h-full relative lg:pr-10">
              <div class="flex flex-col text-base mt-6 w-full h-full relative lg:pr-10">
                <p>Name :</p>
                <p>E-Mail : </p>
                <p>Phone : </p>
                <p>Order Date : </p>
                <div class=" text-lg mt-2 font-bold">
                  <p>Order List : </p>
                  <p>Schedule</p>
                  <p> Price </p>
                </div>
              </div>
              <div class="flex flex-col text-base mt-6 w-full h-full relative lg:pr-10">
                <p>Andrian Junior</p>
                <p>Andrian.Junior@gmail.com </p>
                <p>0812345678910</p>
                <p>21 December 2023</p>
                <div class=" text-lg mt-2 font-bold pb-10">
                  <p> Lapangan Futsal ELANG </p>
                  <p> 09:00 - 10:00 </p>
                  <p> Rp. 125.000 </p>
                </div>
              </div>
            </div>
          </div>
          <div class=" mt-16 mr-0 mb-0 ml-10 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div
              class="flex flex-col items-center justify-center pt-20 pr-10 pb-10 pl-10 shadow-2xl w-auto rounded-xl
            relative z-10"
            >
              <ToggleButtonGroup color="primary" fullWidth="">
                <div className="columns-5 w-auto pt-5 ">
                  <ToggleButton value="jam1" className="flex flex-row">
                    <div className="flex flex-col items-center justify-center">
                      <LocalAtmIcon></LocalAtmIcon>QRIS
                    </div>
                  </ToggleButton>

                  <ToggleButton value="jam1" className="flex flex-row">
                    <div className="flex flex-col items-center justify-center">
                      <LocalAtmIcon></LocalAtmIcon>GO-PAY
                    </div>
                  </ToggleButton>

                  <ToggleButton value="jam1" className="flex flex-row">
                    <div className="flex flex-col items-center justify-center">
                      <LocalAtmIcon></LocalAtmIcon>BCA
                    </div>
                  </ToggleButton>

                  <ToggleButton value="jam1" className="flex flex-row">
                    <div className="flex flex-col items-center justify-center">
                      <LocalAtmIcon></LocalAtmIcon>GO-PAY
                    </div>
                  </ToggleButton>
                </div>
              </ToggleButtonGroup>
            </div>
            <div className="items-center justify-center">
              <button className="bg-[#DC0000] items-center justify-center text-center rounded-xl m-auto mt-5 h-auto text-xl w-28">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentConfirmation;

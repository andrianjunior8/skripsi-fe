import React, { useEffect, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const AboutUS = () => {
  return (
    <div class="bg-white relative">
      <div
        class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row bg-white"
      >
        <div class="flex flex-col items-center w-full pt-5 mt-10 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
              <img
                src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?w=826&t=st=1679239330~exp=1679239930~hmac=fa809a1400774ad845b47611fdbcb68bf2a34626d892231458405a0d2417e49c"
                class="btn-"
              />
            </div>

            <div className="flex row-4 items-center justify-center space-x-2 mt-10">
              <div class="flex justify-center text-center items-center space-x-2">
                <a href="https://wa.me/6281318093717" role="button">
                  <WhatsAppIcon className="w-11 h-11"></WhatsAppIcon>
                </a>

                <a href="https://wa.me/6281318093717" role="button">
                  <p className="font-bold">Hubungi Kami</p>
                </a>
              </div>
            </div>
          </div>

          <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div
              class="flex flex-col items-start justify-start pt-20 pr-10 pb-20 pl-10 bg-slate-100 shadow-xl rounded-xl
            relative z-10"
            >
              <p class="w-full text-4xl font-medium text-center leading-snug font-serif">
                {" "}
                About Us
              </p>

              <p className="w-full text-xl text-center leading-snug font-serif mt-10">
                sehatRaga adalah website yang dirancang dan dibuat untuk
                membantu dan mempermudah pengguna yang ingin menyewa sebuah
                lapangan olahraga.
              </p>

              <p className="w-full text-xl text-center leading-snug font-serif mt-10">
                sehatRaga membantu pengguna untuk mengetahui detail lapangan
                olahraga yang ingin disewa, seperti harga, lokasi, dan jadwal
                yang tersedia.
              </p>

              <p className="w-full text-xl text-center leading-snug font-serif mt-10">
                sehatRaga juga membantu pemilik venue dalam mengelola venue
                olahraga mereka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUS;

import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import venue from "../../services/api/venue";
import { useRouter } from "next/router";
import { Box, Button, Link, Typography } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import InfoIcon from "@mui/icons-material/Info";
import DoneIcon from "@mui/icons-material/Done";

const Dashboard = () => {
  const router = useRouter();

  const [listPopularVenue, setListPopularVenue] = useState([]);

  const dbGetPopularVenue = useCallback(debounce(mtGetPopularVenue, 400));

  async function mtGetPopularVenue() {
    try {
      const getpopularvenue = await venue.getPopularVenue();

      const { data } = getpopularvenue.data;

      console.log("data", data);
      if (data != null) {
        setListPopularVenue(data);
      } else {
        setListPopularVenue([]);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  useEffect(() => {
    dbGetPopularVenue();
  }, []);

  return (
    <div className="w-screen h-auto absolute bg-slate-100">
      <div className="w-screen pl-10 pr-10">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-red-800 to-red-900 px-6 pt-16 shadow-2xl sm:rounded-3xl ">
            <Typography className="font-bold text-center text-white p-10 mb-16 text-4xl">
              sehatRaga untuk Olahraga Indonesia
            </Typography>
          </div>
        </div>
      </div>

      <div className="pl-10 pr-10 w-screen">
        <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl justify-between flex items-center">
          <p className="text-3xl font-bold text-red-900">Venue</p>

          <Link href="/venue" className="no-underline text-gray-500">
            View More
          </Link>
        </div>

        <div className="mx-auto max-w-7xl sm:px-6 mt-10 mb-10 lg:px-8">
          <div className="relative isolate overflow-hidden bg-slate-100 border-gray-200 border-2 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {listPopularVenue &&
                listPopularVenue.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() =>
                      router.push({
                        pathname: `/venue/${item.venue_id}`,
                      })
                    }
                  >
                    <div className="group relative border border-gray-400 rounded-md shadow-sm shadow-black bg-white">
                      <div className="overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                        <img
                          src={item.venue_img_source}
                          className="w-full h-52 rounded-md "
                          alt="futsal"
                        ></img>
                      </div>
                      <div className="mt-4 flex justify-between p-2">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <p>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              ></span>
                              {item.venue_name}
                            </p>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.venue_province} - {item.venue_city}
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                            Harga Mulai Dari Rp {item.lowest_price}/hour
                          </p>
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
            </div>
          </div>
        </div>

        {/* <div className="bg-red-900 shadow-2xl rounded-2xl border-white mb-10">
          <div className="bg-red-900 rounded-xl shadow-2xl border-white mx-auto max-w-2xl px-4 sm:px-6 py-4 lg:max-w-7xl lg:px-8">
            <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {listPopularVenue &&
                listPopularVenue.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() =>
                      router.push({
                        pathname: `/venue/${item.venue_id}`,
                      })
                    }
                  >
                    <div className="group relative border border-gray-400 rounded-md shadow-sm shadow-black bg-white">
                      <div className="overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                        <img
                          src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1820.jpg?w=1380&t=st=1682410359~exp=1682410959~hmac=a6cb737b977fd94202ed3fbbe330a28a665a0aefdb40c3716cfdf1b3d064e5e2"
                          className="w-full h-52 rounded-md "
                          alt="futsal"
                        ></img>
                      </div>
                      <div className="mt-4 flex justify-between p-2">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <p>
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              ></span>
                              {item.venue_name}
                            </p>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.venue_province} - {item.venue_city}
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                            Harga Mulai Dari Rp {item.lowest_price}/hour
                          </p>
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
            </div>
          </div>
        </div> */}

        <div className="mx-auto max-w-7xl sm:px-6 mt-20 mb-20 lg:px-8">
          <div className="relative isolate overflow-hidden sm:rounded-3xl ">
            <div className="">
              <Typography className="text-5xl font-bold text-center p-10">
                Kenapa Harus sehatRaga
              </Typography>
            </div>

            <div class="flex justify-around p-10 pb-0 mb-20">
              <div className="pl-10 pr-10">
                <div className="text-center">
                  <InfoIcon className="w-24 h-24"></InfoIcon>
                </div>
                <div className="font-bold text-center text-2xl">
                  Cek Info Lapangan
                </div>
                <div className="text-center text-xl">
                  Bisa tahu informasi lapangan tanpa harus ke lokasi.
                </div>
              </div>

              <div className="pl-10 pr-10">
                <div className="text-center">
                  <DoneIcon className="w-24 h-24"></DoneIcon>
                </div>
                <div className="font-bold text-center text-2xl">
                  Mudah & Simpel
                </div>
                <div className="text-center text-xl">
                  Booking lapangan olahraga kapanpun dan dimanapun.
                </div>
              </div>

              <div className="pl-10 pr-10">
                <div className="text-center">
                  <BarChartIcon className="w-24 h-24"></BarChartIcon>
                </div>
                <div className="font-bold text-center text-2xl">
                  Kelola Venue Olahragamu
                </div>
                <div className="text-center text-xl">
                  Update venuemu dan pantau performa venuemu
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-red-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ada Venue Olahraga?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ayo daftarkan venue olahragamu dan nikmati keuntungannya,
                Semuanya dimulai dengan pengelolaan yang simpel dan fleksibel
                lewat sehatRaga.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="https://wa.me/6281318093717"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Daftarkan Venue
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-3xl bg-white/5 ring-1 ring-white/10"
                src="/lapangan.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-900 text-center p-10 mt-20">
        <label className="text-white text-center font-bold">
          SehatRaga ©2023
        </label>
      </div>
    </div>
  );
};

export default Dashboard;

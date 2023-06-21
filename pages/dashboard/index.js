import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import venue from "../../services/api/venue";
import { useRouter } from "next/router";
import { Box, Button, Typography } from "@mui/material";

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
    <div className="w-screen h-auto absolute bg-white">
      <div className="mt-28 w-screen justify-center flex">
        <img
          src={`/basketball.jpg`}
          className="overflow-hidden object-fit:fill"
          width="800px"
          height="400px"
          alt="Banner"
        ></img>
      </div>
      <div className="m-10">
        <div className="p-10">
          <p className="text-5xl font-bold font-mono text-center ">Category</p>
        </div>
        <div className="p-16 rounded-lg bg-[#FFF6C3] shadow-md">
          <div className="grid grid-cols-3 text-center">
            <div className="flex justify-center">
              <div className="">
                <div>
                  <img
                    src={`/futsal.jpeg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                </div>
                <div>
                  <p className="text-2xl font-mono mb-5 mt-2">Futsal</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="">
                  <img
                    src={`/basket.jpg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                  <p className="text-2xl font-mono mb-5 mt-2">Basket</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="">
                  <img
                    src={`/soccer.jpg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                  <p className="text-2xl font-mono mb-5 mt-2">Sepak Bola</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="">
                  <img
                    src={`/soccer.jpg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                  <p className="text-2xl font-mono  mt-2">Voli</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="">
                  <img
                    src={`/soccer.jpg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                  <p className="text-2xl font-mono mt-2">Badminton</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="">
                  <img
                    src={`/soccer.jpg`}
                    className="h-56 w-56 rounded-md"
                    width="500"
                    height="500"
                    alt="futsal"
                  ></img>
                  <p className="text-2xl font-mono mt-2">Mini Soccer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-10 p-5">
          <p className="text-5xl font-bold font-mono text-center">Popular</p>
        </div>

        <div className="bg-[#FFF6C3] m-14">
          <div className="bg-[#FFF6C3] mx-auto max-w-2xl px-4  sm:px-6 py-4 lg:max-w-7xl lg:px-8">
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
        </div>
        {/* <Box className="bg-[#FFF6C3] m-14">
          <div className="bg-[#FFF6C3] mx-auto max-w-2xl px-4  sm:px-6 py-4 lg:max-w-7xl lg:px-8">
            <Typography className="text-5xl font-bold font-mono text-center">
              WHY US
            </Typography>
          </div>
        </Box> */}
      </div>
    </div>
  );
};

export default Dashboard;

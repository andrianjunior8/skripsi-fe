import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api/venue";
import { useRouter } from "next/router";
import Link from "next/link";

const VenueDashboard = () => {
  const [header, setHeader] = useState({});
  const [detail, setDetail] = useState([]);
  // const venueid = localStorage.getItem("userid");
  const venueid = "321223sd";

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    debounceMountGetVenue();
  }, [router.isReady]);

  const debounceMountGetVenue = useCallback(debounce(mountGetVenue, 400));

  async function mountGetVenue() {
    try {
      const parameter = {
        venueid: venueid,
      };

      console.log(parameter);

      const getVenue = await api.getVenue(parameter);
      console.log("getVenue", getVenue);
      const { data } = getVenue.data;
      if (data != null) {
        console.log("data", data);
        setHeader(data.Header);
        console.log("Header", data.Header);
        setDetail(data.Detail);
        console.log("Detail", data.Detail);
      } else {
        console.log("data null");
      }
    } catch (error) {
      console.log("ERROR LOGIN", error);
    }
  }

  return (
    <div class="bg-white w-full h-full py-20">
      <div class="p-10">
        <div class="bg-[#DC0000] text-[#FFDB89] rounded-3xl justify-center mt-2 mb-5 flex h-auto w-full p-10 place-items-center font-bold xl:text-2xl sm:text-xs">
          Welcome to your dashboard!
        </div>

        <div class="flex flex-col items-center  justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
          <div class="flex flex-col p-6 w-screen h-[550px] mx-auto max-w-lg text-left gap-4  bordertext-gray-900 bg-[#FFF6C3] rounded-lg border border-[#850000] shadow dark:border-gray-600 xl:p-8 dark:bg-[#F3EFE0] dark:text-black">
            <h3 class="mb-4 text-2xl font-semibold">Select Venue</h3>

            <div class="overflow-x-auto w-[475px] shadow-md sm:rounded-lg">
              <table class="w- text-m text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  {detail &&
                    detail.map((item, index) => (
                      <tr key={index} class=" border-b  dark:border-black ">
                        <td class="px-6 py-4 font-semibold text-black dark:text-black">
                          {item.venue_detail_name}
                        </td>
                        <td class="px-6 py-4 font-semibold text-black dark:text-black">
                          Booked {item.venue_total_book} times
                        </td>
                        <td class="px-6 py-4">
                          <a
                            href="#"
                            class="font-medium text-blue-600 dark:text-blue-600 hover:underline"
                          >
                            Select
                          </a>
                        </td>
                        <td class="px-6 py-4">
                          <a
                            href="#"
                            class="font-medium text-red-600 dark:text-red-500 hover:underline"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div class="flex flex-row justify-center">
              <Link
                href="/organizer/addvenue"
                class="font-medium text-blue-600 dark:text-blue-600 hover:underline"
              >
                Add Venue
              </Link>
            </div>
          </div>

          <div class="flex flex-col items-center pr-10 pb-0 pl-10 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 ">
            <div
              class="flex flex-col items-center  justify-between pr-10 pb-3 pl-10 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
            >
              {" "}
              <button class="  flex flex-col p-6 mx-auto max-w-lg text-left text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[#F3EFE0] dark:text-black">
                <h3 class="mb-4 text-2xl font-semibold">New Booking</h3>
                <div class="flex flex-row">
                  <img
                    src="https://www.freeiconspng.com/uploads/basket-cart-icon-27.png"
                    width="35"
                    alt="basket cart icon"
                  />
                  <div class="mb-4 text-2xl font-semibold pl-5">2</div>
                </div>
              </button>
              <button class="flex flex-col p-6 h-36 mx-auto ml-3 max-w-lg text-left text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[#F3EFE0] dark:text-black">
                <h3 class="mb-4 text-xl font-semibold">
                  View / Edit Booked Schedule
                </h3>
              </button>
            </div>
            <div class="flex flex-col  mx-auto w-full max-w-lg text-left text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[#F3EFE0] dark:text-black">
              <h3 class="mb-4 text-2xl font-semibold">Order Recap</h3>

              <table class="w-full text-sm text-left border-b  dark:bg-[#F3EFE0] dark:text-black text-l">
                <tbody>
                  <tr class="dark:bg-[#F3EFE0] border-b border-b-[#850000] dark:text-black">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium border-b-[#850000] text-gray-900 whitespace-nowrap dark:bg-[#F3EFE0] dark:text-black"
                    >
                      Lapangan Futsal 1
                    </th>
                    <td class="px-4 py-4">20:00 - 21:00</td>
                    <td class="px-6 py-4">07-04-2023</td>
                  </tr>

                  <tr class="bg-white border-b border-b-[#850000] dark:bg-[#F3EFE0] dark:text-black">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:bg-[#F3EFE0] dark:text-black"
                    >
                      Lapangan Futsal 2
                    </th>
                    <td class="px-4 py-4">20:00 - 21:00</td>
                    <td class="px-6 py-4">07-04-2023</td>
                  </tr>

                  <tr class="bg-white border-b border-b-[#850000] dark:bg-[#F3EFE0] dark:text-black">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:bg-[#F3EFE0] dark:text-black"
                    >
                      Lapangan Futsal 3
                    </th>
                    <td class="px-4 py-4">20:00 - 21:00</td>
                    <td class="px-6 py-4">07-04-2023</td>
                  </tr>
                  <tr class="bg-white border-b border-b-[#850000] dark:bg-[#F3EFE0] dark:text-black">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:bg-[#F3EFE0] dark:text-black"
                    >
                      Lapangan Futsal 4
                    </th>
                    <td class="px-4 py-4">20:00 - 21:00</td>
                    <td class="px-6 py-4">07-04-2023</td>
                  </tr>
                </tbody>
              </table>

              <div class="flex flex-row justify-center">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-600 hover:underline"
                >
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDashboard;

import saleApi from "../../services/api/sale";
import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

const NewOrder = () => {
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const venueid = localStorage.getItem("venueid");
    debounceMountGetHistory(venueid);
  }, [router.isReady]);

  const debounceMountGetHistory = useCallback(debounce(mountGetHistory, 400));

  async function mountGetHistory(value) {
    try {
      const parameter = {
        venueid: value,
        limit: 100,
      };
      const getHistory = await saleApi.getHistory(parameter);
      const { data } = getHistory.data;
      if (data != null) {
        setHistory(data);
      } else {
        setHistory([]);
        console.log("data null");
      }
    } catch (error) {
      console.log("ERROR GET HISTORY", error);
    }
  }

  const debounceMountUpdateAccept = useCallback(
    debounce(mountUpdateAccept, 400)
  );

  async function mountUpdateAccept(orderID, value) {
    try {
      const parameter = {
        orderid: orderID,
        accept: value,
      };
      const getHistory = await saleApi.updateAccept(parameter);
      const { data } = getHistory.data;
      if (data != null) {
        setHistory(data);
      } else {
        setHistory([]);
        console.log("data null");
      }
    } catch (error) {
      console.log("ERROR GET HISTORY", error);
    }
  }
  return (
    <div class="bg-white w-full h-full py-20">
      <div class="p-10">
        <div class="flex flex-col p-6 w-full h-full mx-auto max-w-lg text-left gap-4  bordertext-gray-900 bg-[#FFF6C3] rounded-lg border border-[#850000] shadow dark:border-gray-600 xl:p-8 dark:bg-[#F3EFE0] dark:text-black">
          <h3 class="mb-4 text-2xl font-semibold">New Order</h3>

          <div class="overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-m text-left text-gray-500 dark:text-gray-400">
              <tbody>
                {history &&
                  history.map((item, index) => (
                    <tr key={index} class=" border-b  dark:border-black ">
                      <td class="px-6 py-4 font-semibold text-black dark:text-black">
                        {item.venue_detail_name}
                      </td>
                      <td class="px-6 py-4 font-semibold text-black dark:text-black">
                        {item.sale_ordertime + "-" + item.sale_orderdate}
                      </td>
                      {item.sale_accept === "Y" ? (
                        <Typography className="px-6 py-4">Accepted</Typography>
                      ) : item.sale_accept === "N" ? (
                        <Typography className="px-6 py-4">Declined</Typography>
                      ) : (
                        <>
                          {" "}
                          <td class="px-6 py-4">
                            <a
                              href="#"
                              class="font-medium text-green-500 dark:text-green-500 hover:underline"
                              onClick={() =>
                                debounceMountUpdateAccept(
                                  item.sale_orderid,
                                  "Y"
                                )
                              }
                            >
                              Confirm
                            </a>
                          </td>
                          <td class="px-6 py-4">
                            <a
                              href="#"
                              class="font-medium text-red-600 dark:text-red-500 hover:underline"
                              onClick={() =>
                                debounceMountUpdateAccept(
                                  item.sale_orderid,
                                  "N"
                                )
                              }
                            >
                              Decline
                            </a>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;

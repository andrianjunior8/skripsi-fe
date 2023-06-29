import { Button, Typography } from "@mui/material";
import { debounce } from "lodash";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import saleApi from "../../services/api/sale";
import { useRouter } from "next/router";
import dayjs from "dayjs";

const Summary = () => {
  const tableRef = useRef(null);
  const newDate = new Date();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const router = useRouter();

  const [listSale, setListSale] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!router.isReady) return;
    const venueID = localStorage.getItem("venueid");
    debounceMountGetSaleThisMonth(venueID);
  }, [router.isReady]);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Pendapatan Venue Tahun " + year + " Bulan ke-" + month,
    sheet: "Tahun " + year + " Bulan ke-" + month,
  });

  const debounceMountGetSaleThisMonth = useCallback(
    debounce(mountGetSaleThisMonth, 400)
  );

  async function mountGetSaleThisMonth(venueID) {
    try {
      const newParams = {
        venueid: venueID,
      };

      console.log("[GetSaleThisMonth][PARAMS]", newParams);
      const getSale = await saleApi.getSaleThisMonth(newParams);
      const { data } = getSale.data;
      if (data != null) {
        setListSale(data);

        var tempTotal = 0;
        for (let i = 0; i < data.length; i++) {
          tempTotal = tempTotal + data[i].sale_total_payment;
        }
        setTotal(tempTotal);
        console.log("data", data);
      } else {
        setListSale([]);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  return (
    <div class="bg-slate-100 w-screen h-screen absolute py-20">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10 mb-10">
        <div class="flex flex-col p-10 w-full h-auto gap-2 mr-4 bg-white rounded-lg shadow-md">
          <div className="justify-between flex items-center">
            <p class="mb-4 font-bold text-2xl">
              This Month
              <Button
                className="bg-red-900 hover:bg-red-700 text-white font-bold text-sm ml-4"
                onClick={onDownload}
              >
                Export to Excel
              </Button>
            </p>
            <p class="mb-4 font-bold text-xl">{`${
              "Rp" + Intl.NumberFormat("en-US").format(total)
            } (${listSale.length}x Order)`}</p>
          </div>
          <div class="overflow-x-auto mb-4">
            <table class="w-full" ref={tableRef}>
              {listSale &&
                listSale.map((item, index) => (
                  <tbody key={index}>
                    <tr class=" border-b  dark:border-black ">
                      <td class="px-6 py-4 text-black dark:text-black">
                        {item.venue_detail_name}
                      </td>
                      <td class="px-6 py-4 text-black dark:text-black">
                        {dayjs(item.sale_orderdate).format("YYYY MMMM DD")}
                      </td>
                      <td class="px-6 py-4 text-black dark:text-black">
                        {item.ordertime &&
                          item.ordertime.map((item1, index) => (
                            <Typography key={index}>
                              {item1.sale_ordertime}
                            </Typography>
                          ))}
                      </td>
                      <td class="px-6 py-4 text-black dark:text-black">
                        {"Rp" +
                          Intl.NumberFormat("en-US").format(
                            item.sale_total_payment
                          )}
                      </td>
                      <td class="px-6 py-4 text-black dark:text-black">
                        {`Order By ${item.first_name}  ${item.last_name}`}
                      </td>

                      <td class="px-6 py-4 text-black dark:text-black">
                        {dayjs(item.sale_lastupdate).format(
                          "YYYY MMMM DD HH:mm:ss"
                        )}
                      </td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

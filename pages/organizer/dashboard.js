import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api/venue";
import saleApi from "../../services/api/sale";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
} from "@mui/material";

const VenueDashboard = () => {
  const [header, setHeader] = useState({});
  const [detail, setDetail] = useState([]);
  const [history, setHistory] = useState([]);
  const [selectedDetailCode, setSelectedDetailCode] = useState("");
  const [selectedVenueID, setSelectedVenueID] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const venueid = localStorage.getItem("venueid");
    debounceMountGetVenue(venueid);
    debounceMountGetHistory(venueid);
  }, [router.isReady]);

  const debounceMountGetVenue = useCallback(debounce(mountGetVenue, 400));

  async function mountGetVenue(value) {
    try {
      const parameter = {
        venueid: value,
      };

      console.log(parameter);

      const getVenue = await api.getVenue(parameter);
      console.log("getVenue", getVenue);
      const { data } = getVenue.data;
      if (data != null) {
        setHeader(data.Header);
        setDetail(data.Detail);
      } else {
        console.log("data null");
      }
    } catch (error) {
      console.log("ERROR LOGIN", error);
    }
  }

  const debounceMountGetHistory = useCallback(debounce(mountGetHistory, 400));

  async function mountGetHistory(value) {
    try {
      const parameter = {
        venueid: value,
        limit: 5,
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

  const debounceMountDeleteTDVenue = useCallback(
    debounce(mountDeleteTDVenue, 400)
  );

  async function mountDeleteTDVenue(value, detailCode) {
    try {
      const parameter = {
        venueid: value,
        detailcode: detailCode,
      };
      const deleteTD = await api.deleteTDVenue(parameter);
      debounceMountGetVenue(value);
      handleClose();
    } catch (error) {
      console.log("ERROR GET HISTORY", error);
    }
  }

  function handleDelete(venueid, detailcode) {
    setSelectedVenueID(venueid);
    setSelectedDetailCode(detailcode);
    handleClickOpen();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div class="bg-slate-100 w-full h-full py-20">
      <div class="p-10">
        <div class="bg-[#DC0000] text-[#FFDB89] rounded-3xl justify-center mt-2 mb-5 flex h-auto w-full p-10 place-items-center font-bold xl:text-2xl sm:text-xs">
          Welcome to your dashboard!
        </div>

        <div class="flex flex-col items-center  justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
          <div class="flex flex-col p-6 w-screen h-[550px] mx-auto max-w-lg text-left gap-4  bordertext-gray-900 bg-slate-100 rounded-lg border border-[#850000] shadow dark:border-gray-600 xl:p-8 dark:bg-[#F3EFE0] dark:text-black">
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
                          {"Rp" + item.venue_price}
                        </td>
                        <td class="px-6 py-4">
                          <a
                            href="/organizer/updatevenue"
                            class="font-medium text-blue-600 dark:text-blue-600 hover:underline"
                          >
                            EDIT
                          </a>
                        </td>
                        <td class="px-6 py-4">
                          <a
                            class="font-medium text-red-600 dark:text-red-500 hover:underline"
                            onClick={() =>
                              handleDelete(item.venue_id, item.venue_detailcode)
                            }
                          >
                            REMOVE
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
            <div class="flex flex-col  mx-auto w-full max-w-lg text-left text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-[#F3EFE0] dark:text-black">
              <h3 class="mb-4 text-2xl font-semibold">Order Recap</h3>

              <table class="w-full text-sm text-left border-b  dark:bg-[#F3EFE0] dark:text-black text-l">
                <tbody>
                  {history &&
                    history.map((item, index) => (
                      <tr
                        key={index}
                        class="dark:bg-[#F3EFE0] border-b border-b-[#850000] dark:text-black"
                      >
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium border-b-[#850000] text-gray-900 whitespace-nowrap dark:bg-[#F3EFE0] dark:text-black"
                        >
                          {item.venue_detail_name}
                        </th>
                        <td class="px-4 py-4">{item.sale_ordertime}</td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <div class="flex flex-row justify-center">
                <Link
                  href="/organizer/neworder"
                  class="font-medium text-blue-600 dark:text-blue-600 hover:underline"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              are you sure want to book this venue?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button
              onClick={() =>
                debounceMountDeleteTDVenue(selectedVenueID, selectedDetailCode)
              }
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default VenueDashboard;

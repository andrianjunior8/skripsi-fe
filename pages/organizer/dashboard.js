import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api/venue";
import saleApi from "../../services/api/sale";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const VenueDashboard = () => {
  const [header, setHeader] = useState({});
  const [detail, setDetail] = useState([]);
  const [history, setHistory] = useState([]);
  const [selectedDetailCode, setSelectedDetailCode] = useState("");
  const [selectedVenueID, setSelectedVenueID] = useState("");
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const venueid = localStorage.getItem("venueid");
    debounceMountGetVenue(venueid);
    debounceMountGetHistory(venueid);
    debounceMountGetSaleThisMonth(venueid);
  }, [router.isReady]);

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
        var tempTotal = 0;
        for (let i = 0; i < data.length; i++) {
          tempTotal = tempTotal + data[i].sale_total_payment;
        }
        setTotalOrder(data.length);
        setTotal(tempTotal);
        console.log("data", data);
      } else {
        setTotal(0);
        setTotalOrder(0);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }

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
    <div className="w-screen h-auto absolute bg-slate-100 mt-10">
      <div className="w-screen pl-10 pr-10">
        <div className="mx-auto max-w-7xl mt-20 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-red-800 to-red-900 px-6 pt-16 shadow-2xl sm:rounded-3xl ">
            <Typography className="font-bold text-center text-white mb-16 text-2xl">
              Welcome to Your Dashboard
            </Typography>
          </div>
        </div>

        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-between mt-10 mb-10">
          <div class="flex flex-col p-4 w-2/3 h-96 gap-2 mr-4 bg-white rounded-lg shadow-md">
            <p class="mb-4">List Venue</p>

            <div class="overflow-x-auto mb-4">
              <table class="w-full">
                <tbody>
                  {detail &&
                    detail.map((item, index) => (
                      <tr key={index} class=" border-b  dark:border-black ">
                        <td class="px-6 py-4 font-semibold text-black dark:text-black">
                          {item.venue_detail_name}
                        </td>
                        <td class="px-6 py-4 text-black dark:text-black">
                          {"Rp" +
                            Intl.NumberFormat("en-US").format(item.venue_price)}
                        </td>
                        <td class="px-6 py-4">
                          <Button
                            className="font-bold text-blue-600 hover:text-blue-900"
                            onClick={() =>
                              router.push({
                                pathname: `/organizer/updatevenue`,
                                query: {
                                  detailcode: item.venue_detailcode,
                                },
                              })
                            }
                          >
                            EDIT
                          </Button>
                        </td>
                        <td class="px-6 py-4">
                          <a
                            className="font-bold text-red-600 hover:text-red-900"
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
                className="font-bold text-green-600 hover:text-green-900"
                href="/organizer/addvenue"
              >
                Add Venue
              </Link>
            </div>
          </div>

          <div className="bg-slate-100 w-1/3">
            <div className="bg-white h-full p-4 rounded-lg border shadow-md ml-4">
              <div className="h-1/3">Summary</div>
              <div className="text-center h-1/2">
                <div className="text-4xl font-bold text-black">
                  {`${"Rp" + Intl.NumberFormat("en-US").format(total)}`}
                </div>
                <div className="text-gray-500">{`${totalOrder}x Order this Month`}</div>
              </div>
              <div className="text-center font-bold text-red-900 h-1/3">
                <Link href="/organizer/summary">View More</Link>
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
              are you sure want to remove this venue?
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

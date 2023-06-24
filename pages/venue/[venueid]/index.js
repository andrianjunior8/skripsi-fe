import {
  Box,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import React, { useState, useCallback, useEffect } from "react";
import venueApi from "../../../services/api/venue";
import saleApi from "../../../services/api/sale";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import dayjs from "dayjs";

const VenueID = () => {
  const [venueID, setVenueID] = useState("");
  const [header, setHeader] = useState({});
  const [detail, setDetail] = useState([]);
  const [hourAvail, setHourAvail] = useState([]);
  const [idxShowImg, setIdxShowImg] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("CASH");
  const [bookDate, setBookDate] = useState("");
  const [totalHarga, setTotalHarga] = useState(0);
  const [name, setName] = useState("");
  const [userID, setUserID] = useState("");
  const [textToast, setTextToast] = useState("");
  const [showResponseToast, setShowResponseToast] = useState(false);
  const [openCollapse, setOpenCollapse] = useState(false);
  const [priceVenue, setPriceVenue] = useState(0);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { venueid } = router.query;
    console.log("venueid", venueid);
    setVenueID(venueid);
    setName(localStorage.getItem("name"));
    setUserID(localStorage.getItem("userid"));
  }, [router.isReady]);

  useEffect(() => {
    if (venueID !== "") {
      debounceMountGetVenue();
    }
  }, [venueID]);

  const debounceMountGetVenue = useCallback(debounce(mountGetVenue, 400));

  async function mountGetVenue() {
    try {
      const parameter = {
        venueid: venueID,
      };

      const getVenue = await venueApi.getVenue(parameter);
      console.log("[GetVenue]", getVenue);
      const { data } = getVenue.data;
      if (data != null) {
        console.log("[DATA]", data.Detail[0]);
        setHeader(data.Header);
        setDetail(data.Detail);
        const openTime = data.Header.venue_opentime;
        const closeTime = data.Header.venue_closetime;

        const open = parseInt(openTime.slice(0, 2));
        const close = parseInt(closeTime.slice(0, 2));
        const newArr = [];
        for (let index = open; index < close; index++) {
          let avail = {
            hour: index,
            status: "AVAILABLE",
          };
          newArr.push(avail);
        }
        setHourAvail(newArr);
      } else {
        setHeader({});
        setDetail([]);
        console.log("data null");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  const debounceMountCheckAvail = useCallback(debounce(mountCheckAvail, 400));

  async function mountCheckAvail() {
    try {
      const formattedDate = dayjs().format(bookDate, "YYYYMMDD");
      const newParams = {
        venueid: venueID,
        detailcode: detail[idxShowImg].venue_detailcode,
        orderdate: formattedDate,
      };

      console.log("[CHECKAVAIL][PARAMS]", newParams);
      const checkAv = await saleApi.checkAvail(newParams);
      console.log("[CheckAvail]", checkAv);
      const { data } = checkAv.data;
      if (data != null) {
        console.log("data", data);
        const arr = [...hourAvail];
        for (let i = 0; i < data.length; i++) {
          const ordertime = parseInt(data[i].sale_ordertime.slice(0, 2));
          const objIndex = arr.findIndex((obj) => obj.hour == ordertime);
          arr[objIndex].status = "NOT AVAILABLE";
        }
        setHourAvail(arr);
        setOpenCollapse(true);
      } else {
        debounceMountGetVenue();
        console.log("[CheckAvail][NULL]");
        setOpenCollapse(true);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  const debounceInsertSale = useCallback(debounce(MountInsertSale, 400));

  async function MountInsertSale() {
    try {
      const arr = [...hourAvail];
      const newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].status === "BOOK") {
          console.log("arr", arr[i]);
          const obj = {
            sale_ordertime: String(arr[i].hour).padStart(2, "0") + ":00",
            sale_price: priceVenue,
          };
          newArr.push(obj);
        }
      }
      console.log("newArr", newArr);

      const formattedDate = dayjs().format(bookDate, "YYYYMMDD");
      const payload = {
        sale_venueid: venueID,
        sale_detailcode: detail[idxShowImg].venue_detailcode,
        sale_status: "BOOK",
        sale_orderby: userID,
        sale_payment: paymentMethod,
        sale_orderdate: formattedDate,
        sale_total_payment: totalHarga,
        detail: newArr,
      };

      console.log(payload);

      const insertsale = await saleApi.insertSale(payload);
      console.log("insertsale", insertsale);
      const { data } = insertsale.data;
      console.log("data", data);
      if (data === "SUCCESS") {
        handleClose();
        router.push("/ticket");
      } else if (data === "FAILED") {
        console.log("ERR", data);
      }
    } catch (error) {
      console.log("ERROR INSERT SALE", error);
    }
  }

  function handleChange(jam, status, price) {
    const arr = [...hourAvail];
    const objIndex = arr.findIndex((obj) => obj.hour == jam);
    if (status === "AVAILABLE") {
      arr[objIndex].status = "BOOK";
    } else if (status === "BOOK") {
      arr[objIndex].status = "AVAILABLE";
    }
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].status === "BOOK") {
        count = count + 1;
      }
    }
    setTotalHarga(detail[idxShowImg].venue_price * count);
    setHourAvail(arr);
    setPriceVenue(detail[idxShowImg].venue_price);
  }

  const handleChangeToggle = (event, payment) => {
    setPaymentMethod(payment);
  };

  useEffect(() => {
    setTotalHarga(0);
  }, [idxShowImg]);

  return (
    <div className="w-screen h-auto absolute bg-white">
      <div className="mt-28 w-screen h-auto p-4">
        <Box className="grid grid-cols-2 gap-x-4 mb-10">
          <div className="gap-y-2">
            <div>
              {detail.length !== 0 ? (
                <img
                  src={detail[idxShowImg].venue_img_source}
                  alt="venue"
                  className="object-none h-96 w-full rounded"
                ></img>
              ) : (
                <img
                  src={`/soccer.jpg`}
                  alt="venue"
                  className="overflow-hidden w-auto rounded"
                ></img>
              )}
              {detail.length !== 0 ? (
                <h3 className="text-black mt-2 ">
                  {detail[idxShowImg].venue_detail_name}
                </h3>
              ) : (
                <h2>Not found</h2>
              )}
              {detail.length !== 0 ? (
                <h4 className="text-black mt-2">
                  {"Rp" +
                    Intl.NumberFormat("en-US").format(
                      detail[idxShowImg].venue_price
                    )}
                </h4>
              ) : (
                <h2>Not found</h2>
              )}
            </div>
          </div>
          <div className="rounded-xl p-4 bg-slate-100 shadow-sm border-1 border">
            <div className="space-y-4 space-x-2">
              <h2>{header.venue_name}</h2>
              <h4>{header.venue_city}</h4>
              <h4>
                {`Open From ` +
                  header.venue_opentime +
                  " to " +
                  header.venue_closetime}
              </h4>
              {detail &&
                detail.map((item, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    className="border border-red-700 text-red-700 hover:border-red-900 hover:bg-red-200"
                    onClick={() => setIdxShowImg(index)}
                  >
                    {item.venue_detail_name}
                  </Button>
                ))}

              <Grid className="space-x-3">
                <TextField
                  type={"date"}
                  size="small"
                  value={bookDate}
                  onChange={(e) => setBookDate(e.target.value)}
                ></TextField>
                <Button
                  variant="contained"
                  className="bg-blue-500 hover:bg-blue-800"
                  onClick={() => debounceMountCheckAvail()}
                  disabled={bookDate === ""}
                >
                  Check Available
                </Button>
              </Grid>
            </div>
            <Collapse in={openCollapse}>
              <h3 className="mt-9">{"Available Hours"}</h3>
              <div className="relative grid grid-cols-4 rounded">
                {hourAvail &&
                  hourAvail.map((item, index) => (
                    <div key={index}>
                      {item.status === "AVAILABLE" ? (
                        <Button
                          className="rounded w-32 h-12 bg-green-500 hover:bg-green-700 border mb-2 mt-2"
                          onClick={() =>
                            handleChange(item.hour, item.status, item.price)
                          }
                        >
                          <Typography
                            textAlign={"center"}
                            color={"white"}
                            className="text-sm"
                          >
                            {`${item.hour}:00 - ${item.hour + 1}:00`}
                          </Typography>
                        </Button>
                      ) : item.status === "NOT AVAILABLE" ? (
                        <Button
                          key={item}
                          className="rounded w-32 h-12 bg-red-500 hover:bg-yellow-600 border mb-2 mt-2"
                          disabled
                          onClick={() =>
                            handleChange(item.hour, item.status, item.price)
                          }
                        >
                          <Typography textAlign={"center"} color={"white"}>{`${
                            item.hour
                          }:00 - ${item.hour + 1}:00`}</Typography>
                        </Button>
                      ) : (
                        <Button
                          key={item}
                          className="rounded w-32 h-12 bg-yellow-500 hover:bg-yellow-600 border mb-2 mt-2"
                          onClick={() =>
                            handleChange(item.hour, item.status, item.price)
                          }
                        >
                          <Typography textAlign={"center"} color={"white"}>{`${
                            item.hour
                          }:00 - ${item.hour + 1}:00`}</Typography>
                        </Button>
                      )}
                    </div>
                  ))}
              </div>
            </Collapse>
            <h3 className="mt-6 mb-6">Choose Payment Type</h3>
            <div
              class="flex flex-col items-center justify-center  pr-10 pb-10 pl-10 w-auto rounded-xl
            relative z-10"
            >
              <ToggleButtonGroup
                value={paymentMethod}
                color="primary"
                exclusive
                onChange={handleChangeToggle}
                aria-label="Platform"
              >
                <ToggleButton value="CASH" className="flex flex-row w-24">
                  <div className="flex flex-col items-center justify-center">
                    <LocalAtmIcon></LocalAtmIcon>CASH
                  </div>
                </ToggleButton>
                <ToggleButton value="QRIS" className="flex flex-row w-24">
                  <div className="flex flex-col items-center justify-center">
                    <LocalAtmIcon></LocalAtmIcon>QRIS
                  </div>
                </ToggleButton>

                <ToggleButton value="GOPAY" className="flex flex-row w-24">
                  <div className="flex flex-col items-center justify-center">
                    <LocalAtmIcon></LocalAtmIcon>GO-PAY
                  </div>
                </ToggleButton>

                <ToggleButton value="BCA" className="flex flex-row w-24">
                  <div className="flex flex-col items-center justify-center">
                    <LocalAtmIcon></LocalAtmIcon>BCA
                  </div>
                </ToggleButton>

                <ToggleButton value="OVO" className="flex flex-row w-24">
                  <div className="flex flex-col items-center justify-center">
                    <LocalAtmIcon></LocalAtmIcon>OVO
                  </div>
                </ToggleButton>
                {/* </div> */}
              </ToggleButtonGroup>
            </div>
            <Box className="mb-8">
              <h3 className="mb-8">Total Payment</h3>
              <Grid container>
                <Grid item xs={6} className="justify-start">
                  Book Venue
                </Grid>
                <Grid item xs={6} justifyContent={"flex-end"}>
                  {"Rp" + Intl.NumberFormat("en-US").format(totalHarga)}
                </Grid>
              </Grid>
            </Box>
            <div className="text-center">
              <Button
                variant="contained"
                className="bg-red-700 hover:bg-red-900 mt-5"
                onClick={() => handleClickOpen()}
                disabled={totalHarga === 0}
              >
                BOOK
              </Button>
            </div>
          </div>
        </Box>
      </div>
      <Collapse in={showResponseToast}>
        {textToast === "SUCCESS" ? (
          <Box className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800">
            <p className="p-2 text-white">{"Success create account"}</p>
            <Button
              variant="contained"
              onClick={() => setShowResponseToast(false)}
            >
              X
            </Button>
          </Box>
        ) : (
          <Box className="border border-red-300 fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800">
            <p className="p-2 text-white">{"Failed to create account"}</p>
            <Button
              variant="contained"
              onClick={() => setShowResponseToast(false)}
            >
              X
            </Button>
          </Box>
        )}
      </Collapse>
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
            <Button onClick={() => debounceInsertSale()} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="bg-red-900 text-center p-10">
        <label className="text-white text-center font-bold">
          SehatRaga ©2023
        </label>
      </div>
    </div>
  );
};

export default VenueID;

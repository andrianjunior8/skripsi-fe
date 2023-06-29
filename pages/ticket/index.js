import {
  Box,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import saleApi from "../../services/api/sale";
import { debounce, update } from "lodash";
import dayjs from "dayjs";

const Ticket = () => {
  const [listTicket, setListTicket] = useState([]);
  const [modalPayment, setModalPayment] = useState(false);
  const [transferKe, setTransferKe] = useState("");
  const [transferAtasNama, setTransferAtasNama] = useState("");
  const [selectedOrderID, setSelectedOrderID] = useState("");
  const [open, setOpen] = useState(false);
  const [userID, setUserID] = useState("");

  const handleClickOpen = (item) => {
    setSelectedOrderID(item.sale_orderid);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedOrderID("");
    setOpen(false);
  };

  const router = useRouter();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    const userid = localStorage.getItem("userid");
    setUserID(userid);
    debounceMountGetTicket(userid);
  }, [router.isReady]);

  const debounceMountGetTicket = useCallback(debounce(mountGetTicket, 400));

  async function mountGetTicket(userid) {
    try {
      const newParams = {
        userid: userid,
      };

      console.log("[GetTicket][PARAMS]", newParams);
      const getTicket = await saleApi.getTicket(newParams);
      const { data } = getTicket.data;
      console.log("data", data);
      if (data != null) {
        setListTicket(data);
        console.log("data", data);
      } else {
        setListTicket([]);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  const debounceMountUpdatePaymentFlag = useCallback(
    debounce(mountUpdatePaymentFlag, 400)
  );

  async function mountUpdatePaymentFlag(status) {
    try {
      const newParams = {
        status: status,
        orderid: selectedOrderID,
      };

      console.log("[UpdatePaymentFlag][PARAMS]", newParams);
      const updatePayment = await saleApi.updatePaymentFlag(newParams);
      const { data } = updatePayment.data;
      console.log("data", updatePayment);
      if (updatePayment.status === 200) {
        handleClose();
        setModalPayment(false);
        debounceMountGetTicket(userID);
      } else {
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  function handleClickPay(item) {
    setTransferKe(item.venue_transferto);
    setTransferAtasNama(item.venue_transferatasnama);
    setSelectedOrderID(item.sale_orderid);
    setModalPayment(true);
  }

  return (
    <div className="w-screen h-auto absolute bg-slate-100">
      <div className="mt-28 w-screen place-content-center justify-center grid">
        <Grid className="">
          <Typography className="text-xl font-bold text-center">
            My Ticket
          </Typography>
        </Grid>
        {listTicket &&
          listTicket.map((item, index) => (
            <Box
              key={index}
              className="bg-white w-[800px] h-auto m-5 p-10 border rounded shadow-md"
            >
              <div className="grid grid-cols-2 ">
                <div>
                  <Grid>{`Venue Name : ${item.venue_name}`}</Grid>
                  <Grid>{`Venue Detail : ${item.venue_detail_name}`}</Grid>
                  <Grid>{`Book Date : ${dayjs(item.sale_orderdate).format(
                    "YYYY MMMM DD"
                  )}`}</Grid>
                  <Grid>
                    {`Book Hour :`}
                    {item.ordertime &&
                      item.ordertime.map((item1, index) => (
                        <Typography key={index}>
                          {` - ${item1.sale_ordertime}`}
                        </Typography>
                      ))}
                  </Grid>
                  <Grid>{`Price : Rp ${Intl.NumberFormat("en-US").format(
                    item.sale_total_payment
                  )}`}</Grid>
                  <Grid>{`Payment Type : ${item.sale_payment}`}</Grid>
                </div>
                <div className="border border-1">
                  <div className="text-center flex justify-center items-center mt-20">
                    <div>
                      <Typography className="">{"Status : "}</Typography>
                    </div>
                    <div className="ml-2">
                      {item.sale_paymentflag === "N" ? (
                        <Typography className="text-yellow-600 font-bold">
                          WAITING FOR PAYMENT
                        </Typography>
                      ) : item.sale_paymentflag === "C" ? (
                        <Typography className="text-red-600 font-bold">
                          ORDER CANCELED
                        </Typography>
                      ) : (
                        <Typography className="text-green-600 font-bold">
                          PAYMENT COMPLETED
                        </Typography>
                      )}
                    </div>
                  </div>
                  <Collapse in={item.sale_paymentflag === "N"}>
                    <div className="text-center mt-2 space-x-2">
                      <Button
                        variant="outlined"
                        className="border bg-white border-red-900 text-red-900 hover:border-red-900 hover:bg-red-200"
                        onClick={() => handleClickOpen(item)}
                      >
                        CANCEL
                      </Button>

                      <Button
                        variant="contained"
                        className="border bg-red-700 text-white border-red-700  hover:border-red-900 hover:bg-red-900 "
                        onClick={() => handleClickPay(item)}
                      >
                        PAY
                      </Button>
                    </div>
                  </Collapse>
                </div>
              </div>
            </Box>
          ))}
      </div>
      <Modal open={modalPayment}>
        <Box sx={style}>
          <Button
            className="absolute top-2 right-2 bg-red-400 hover:bg-red-600"
            variant="contained"
            onClick={() => setModalPayment(false)}
          >
            X
          </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Payment Confirmation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`Transfer To    : ${transferKe}`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {`Atas Nama : ${transferAtasNama}`}
          </Typography>
          <Grid className="text-center">
            <Button
              variant={"contained"}
              className="mt-8 border bg-red-700 text-white border-red-700  hover:border-red-900 hover:bg-red-900 "
              onClick={() => debounceMountUpdatePaymentFlag("Y")}
            >
              PAY
            </Button>
          </Grid>
        </Box>
      </Modal>
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
              are you sure want to cancel this order?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button
              onClick={() => debounceMountUpdatePaymentFlag("C")}
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

export default Ticket;

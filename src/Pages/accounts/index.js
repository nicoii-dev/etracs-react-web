import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";

const AccountsPage = () => {
    const status = useSelector((state) => state.navStatus.status);
    const [open, setOpen] = useState(false); // for modal

    return (
        <>
            <h2 style={{ fontFamily: "-moz-initial" }}>Accounts Page</h2>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: 10,
                }}
            >
                <Button
                    variant="contained"
                    style={{ color: "white" }}
                    onClick={() => {
                        //setData(null);
                        setOpen(!open);
                    }}
                >
                    Add Account
                </Button>
            </div>

            <div>
                {/* <IndividualTable
                    individualList={individualList}
                    data={data}
                    setData={setData}
                    open={open}
                    setOpen={setOpen}
                    selected={selected}
                    setSelected={setSelected}
                    setSelectedToDelete={setSelectedToDelete}
                    deleteData={deleteData}
                /> */}
            </div>

            <Modal
                isOpen={open}
                onRequestClose={() => {
                    setOpen(!open);
                }}
                contentLabel="Example Modal"
                onClose={() => setOpen(!open)}
                ariaHideApp={false}
                style={{
                    content: {
                        top: "55%",
                        marginLeft: !status ? "50%" : "58%",
                        transform: "translate(-50%, -50%)",
                        width: !status ? "80%" : "73%",
                        height: "75%",
                    },
                }}
            >
                {/* <AddIndividual
                    data={data}
                    setData={setData}
                    addData={addData}
                    updateData={updateData}
                /> */}
            </Modal>
        </>
    )
}

export default AccountsPage;
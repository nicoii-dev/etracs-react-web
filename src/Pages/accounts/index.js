import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";

// components
import AccountsTable from "../../components/accounts/accounts-table";
import AddEditAccounts from "../../components/accounts/add-edit-accounts";

//redux
import { 
    fetchAccountsRedux,
    createAccountRedux,
    updateAccountRedux,
} from "../../redux/accounts/actions";

const AccountsPage = () => {
    const dispatch = useDispatch();

    //global states
    const status = useSelector((state) => state.navStatus.status);
    const accountsList = useSelector((state) => state.accountData.accounts);
    
    // local states
    const [data, setData] = useState([]); // for update purpose
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(fetchAccountsRedux());
    }, [dispatch]);

    const addData = async (_data) => {
        const payload = {
            personnel_id: _data.assignee.value,
            email: _data.email,
            password: _data.password,
            allow_login: _data.allowLogin,
            role: _data.role
        };
        await dispatch(createAccountRedux(payload));
        setShowModal(!showModal);
    };

    const updateData = async (_data) => {
        console.log(_data)
        const payload = {
            allow_login: _data.allowLogin,
            role: _data.role
        }
        await dispatch(updateAccountRedux(payload, _data.id));
        setShowModal(!showModal);
    }

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
                        setData(null);
                        setShowModal(!showModal);
                    }}
                >
                    Add Account
                </Button>
            </div>

            <div>
                <AccountsTable
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    accountsList={accountsList}
                    setData={setData}
                />
            </div>

            <Modal
                isOpen={showModal}
                onRequestClose={() => {
                    Swal.fire({
                        title: 'Discard changes?',
                        showCancelButton: true,
                        confirmButtonText: 'Yes',
                        denyButtonText: `Cancel`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            setShowModal(!showModal);
                        } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }
                    })
                }}
                contentLabel="Example Modal"
                //onClose={() => setShowModal(!showModal)}
                ariaHideApp={false}
                style={{
                    content: {
                        top: "50%",
                        marginLeft: !status ? "45%" : "53%",
                        transform: "translate(-50%, -50%)",
                        width: !status ? "45%" : "38%",
                        height: "75%",
                    },
                }}
            >
                <AddEditAccounts 
                    data={data}
                    addData={addData} 
                    updateData={updateData}
                    accountsList={accountsList}
                />
            </Modal>
        </>
    );
};

export default AccountsPage;

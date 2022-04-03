import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";

// components
import PersonnelTable from "../../components/personnel/personnel-table";
import AddEditPersonnel from "../../components/personnel/add-edit-personnel";

//redux
import {
    fetchPersonnelRedux,
    storePersonnelRedux,
    updatePersonnelRedux,
    deletePersonnelRedux
} from "../../redux/personnel/actions";

const PersonnelPage = () => {
    const dispatch = useDispatch();

    //global states
    const status = useSelector((state) => state.navStatus.status);
    const personnelList = useSelector((state) => state.personnelData.personnels);

    // local states
    const [data, setData] = useState([]); // for update purpose
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(fetchPersonnelRedux());
    }, [dispatch]);

    const addData = async (_data) => {
        const payload = {
            staff_number: _data.staffNumber,
            firstname: _data.firstName,
            middlename: _data.middleName,
            lastname: _data.lastName,
            birth_date: _data.birthDate,
            gender: _data.gender,
            email: _data.email,
            phone_number: _data.phoneNumber,
            txn_code: _data.txnCode,
        };
        await dispatch(storePersonnelRedux(payload));
        setShowModal(!showModal);
    };

      const updateData = (_data) => {
        Swal.fire({
          title: "Do you want to update this data?",
          //showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Update",
        }).then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            const payload = {
                staff_number: _data.staffNumber,
                firstname: _data.firstName,
                middlename: _data.middleName,
                lastname: _data.lastName,
                birth_date: _data.birthDate,
                gender: _data.gender,
                email: _data.email,
                phone_number: _data.phoneNumber,
                txn_code: _data.txnCode,
            };
            console.log(payload, _data.id)
            await dispatch(updatePersonnelRedux(payload, _data.id));
            setShowModal(!showModal);
          }
        });
      };

    const deleteData = async (id) => {
        await dispatch(deletePersonnelRedux(id));
    };

    return (
        <>
            <h2 style={{ fontFamily: "-moz-initial" }}>Personnel Page</h2>
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
                    Add Personnel
                </Button>
            </div>

            <div>
                <PersonnelTable
                    personnelList={personnelList}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                    deleteData={deleteData}
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
                        top: "55%",
                        marginLeft: !status ? "45%" : "53%",
                        transform: "translate(-50%, -50%)",
                        width: !status ? "55%" : "48%",
                        height: "60%",
                    },
                }}
            >
                <AddEditPersonnel
                    addData={addData}
                    updateData={updateData}
                    data={data}
                />
            </Modal>
        </>
    );
};

export default PersonnelPage;

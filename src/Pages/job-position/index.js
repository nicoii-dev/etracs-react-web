import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";

// components
import JobPositionTable from "../../components/job-position/job-position-table";
import AddEditJobPosition from "../../components/job-position/add-edit-job-position";

//redux
import { 
    fetchJobPositionRedux,
    storeJobPositionRedux,
    updateJobPositionRedux,
    deleteJobPositionRedux,
} from "../../redux/job-position/actions";

const JobPositionPage = () => {
    const dispatch = useDispatch();

    //global states
    const status = useSelector((state) => state.navStatus.status);
    const jobPositionList = useSelector((state) => state.jobPositionData.jobPositions);

    // local states
    const [data, setData] = useState([]); // for update purpose
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(fetchJobPositionRedux());
    }, [dispatch]);

    const addData = async (_data) => {
        const payload = {
            code: _data.code,
            description: _data.description,
            org: _data.org,
            personnel_id: _data.personnel_id,
            role: _data.role,
        };
        await dispatch(storeJobPositionRedux(payload));
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
                code: _data.code,
                description: _data.description,
                org: _data.org,
                personnel_id: _data.personnel_id,
                role: _data.role,
            };
            console.log(payload, _data.id)
            await dispatch(updateJobPositionRedux(payload, _data.id));
            setShowModal(!showModal);
          }
        });
      };

    const deleteData = async (id) => {
        await dispatch(deleteJobPositionRedux(id));
    };

    return (
        <>
            <h2 style={{ fontFamily: "-moz-initial" }}>Job Position Page</h2>
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
                    Add Position
                </Button>
            </div>

            <div>
                <JobPositionTable
                    jobPositionList={jobPositionList}
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
                <AddEditJobPosition
                    addData={addData}
                    updateData={updateData}
                    data={data}
                />
            </Modal>
        </>
    );
};

export default JobPositionPage;

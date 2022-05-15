import { Button } from '@mui/material';
import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { TextField } from '@mui/material';
import { AddBox } from '@material-ui/icons';

// components
import ReactToPrintComponent from '../../components/faasV2/react-to-print';
import FaasTable from '../../components/table/faas/faas-table';
import InitialInfo from '../../components/faas/data-capture/initial-info';
import DataCapturePage from '../faas/data-capture';
import InputTdComponent from '../../components/faas/input-td-component';

// redux
import { removeAssessmentDetail } from '../../redux/assessment-detail/actions';
import { removeSelectedAdjustment } from '../../redux/land-adjustments/actions';
import { removeLandValueAdjustment } from '../../redux/land-value-adjustment/action';
import { fetchFaasRedux } from '../../redux/faas/actions';
import { setTransaction } from '../../redux/transaction/action';

import {
    deleteFaasRedux,
    deleteMultipleFaasRedux,
    fetchStatusBasedRedux,
} from "../../redux/faas/actions";

const FaasPage = () => {
    const dispatch = useDispatch();
    // global states
    const faasList = useSelector((state) => state.faasData.faas);
    const revisionYearList = useSelector((state) => state.revisionYearData.revisionYears);
    const municipalityList = useSelector((state) => state.municipalityCityData.municipalityCity);
    const barangayList = useSelector((state) => state.barangayData.barangay);
    const transaction = useSelector(state => state.transactionData.transaction)

    //local states
    const [filteredFaas, setFilteredFaas] = React.useState([]);
    const [showPrintModal, setShowPrintModal] = React.useState(false);
    const [showInitialModal, setShowInitialModal] = React.useState(false);
    const [showDataCaptureModal, setShowDataCaptureModal] = React.useState(false);
    const [showTdModal, setShowTdModal] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState([]);
    const [selectedToDelete, setSelectedToDelete] = React.useState(false);
    //const [transaction, setTransaction] = React.useState("Data Capture");
    const [status, setStatus] = React.useState("INTERIM");

    const user = JSON.parse(localStorage.getItem("user"));

    const personnel = user?.personnel[0]?.firstname + " " + user?.personnel[0]?.middlename?.charAt(0) + ". " + user?.personnel[0]?.lastname;

    React.useEffect(() => {
        dispatch(fetchFaasRedux())
    }, [dispatch])


    // triggers for selected to delete/multiple delete
    React.useEffect(() => {
        setSelected([]);
    }, [faasList]);

    const deleteData = async () => {
        if (selectedToDelete.length > 1) {
            await dispatch(deleteMultipleFaasRedux({ ids: selectedToDelete.toString() })
            );
        } else {
            await dispatch(deleteFaasRedux(selectedToDelete.toString()));
        }
    };

    const onTransferChanged = async (data) => {
        await dispatch(setTransaction(data))
    }

    const onStatusChanged = async (data) => {
        if(data === '-SELECT-') {
            await dispatch(fetchFaasRedux())
            return;
        }
        const payload = {
            status: data
        }
        await dispatch(fetchStatusBasedRedux(payload))
    }

    const onAddFaas = async () => {
        // if(userData.user.role === "APPRAISER") {
        //     await dispatch(setTransaction("Data Capture"))
        //   } else {
        //     await dispatch(setTransaction("Transfer of Ownership"))
        //   }
        if (transaction === "Data Capture") {
            setShowInitialModal(true);
            await dispatch(removeAssessmentDetail());
            await dispatch(removeSelectedAdjustment());
            await dispatch(removeLandValueAdjustment());
            setData(null);
            return;
        }
        setShowTdModal(true)
        setData(null);
    }

    React.useEffect(() => {
        setStatus(data?.status ? data.status : "INTERIM")
    }, [data?.status]);

    const updateFaasList = React.useCallback(async () => {
        if (user.user.role === "APPRAISER") {
            const filtered = faasList?.filter((faas) => {
                return faas.status === "INTERIM";
            })
            setFilteredFaas(filtered)
        } else if (user.user.role === "APPROVER") {
            await dispatch(setTransaction("Transfer of Ownership"))
            const filtered = faasList?.filter((faas) => {
                return faas.status === "CURRENT";
            })
            setFilteredFaas(filtered)
        } else if (user.user.role === "ASSESSOR") {
            const filtered = faasList?.filter((faas) => {
                return faas.status === "FOR APPROVAL" || faas.status === "APPROVED" || faas.status === "CANCELLED";
            })
            setFilteredFaas(filtered)
        } else {
            setFilteredFaas(faasList)
        }
    }, [dispatch, faasList, user.user.role]);

    React.useEffect(() => {
        updateFaasList();
    }, [updateFaasList])

    return (
        <div>
            <h1>F A A S</h1>
            {/* <Button onClick={() => { setShowPrintModal(!showPrintModal) }}>
                <h6>Print</h6>
            </Button> */}

            <div
                style={{
                    width: "100%",
                    display: "flex",
                    //justifyContent: "flex-end",
                    marginBottom: 10,
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                        marginBottom: 10,
                    }}
                >
                    {user.user.role === "ADMIN" || user.user.role === "ASSESSOR" ?
                        <TextField
                            style={{ width: 350, alignSelf: 'flex-start', marginRight: 20 }}
                            fullWidth
                            label="STATUS"
                            name="pinType"
                            select
                            SelectProps={{ native: true }}
                            variant="outlined"
                            onChange={(e) => {
                                onStatusChanged(e.target.value);
                            }}
                            size='small'
                        //value={value}
                        >
                            <option key={"-SELECT-"} value={"-SELECT-"}>
                                -SELECT-
                            </option>
                            {user.user.role === "ASSESSOR" ?
                                null :
                                <>
                                    <option key={'INTERIM'} value={'INTERIM'}>
                                        INTERIM
                                    </option>
                                    <option key={"CURRENT"} value={"CURRENT"}>
                                        CURRENT
                                    </option>
                                </>
                            }
                            <option key={"FOR APPROVAL"} value={"FOR APPROVAL"}>
                                FOR APPROVAL
                            </option>
                            <option key={"APPROVED"} value={"APPROVED"}>
                                APPROVED
                            </option>
                            <option key={"CANCELLED"} value={"CANCELLED"}>
                                CANCELLED
                            </option>
                        </TextField>
                        : null
                    }
                </div>

                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: 10,

                    }}
                >
                    {user.user.role === "APPROVER" || user.user.role === "ADMIN" ?
                        <TextField
                            style={{ width: 350, alignSelf: 'flex-start', marginRight: 20 }}
                            fullWidth
                            label="Transfer FAAS Data"
                            name="pinType"
                            select
                            SelectProps={{ native: true }}
                            variant="outlined"
                            onChange={(e) => {
                                onTransferChanged(e.target.value);
                            }}
                            size='small'
                            value={transaction}
                        >
                            {user.user.role === "APPROVER" ?
                                null :
                                <>
                                    <option key={'DC'} value={'Data Capture'}>
                                        Data Capture
                                    </option>
                                </>
                            }
                            <option key={"Transfer of Ownership"} value={"Transfer of Ownership"}>
                                Transfer of Ownership
                            </option>
                            <option key={"Transfer with Reassessment"} value={"Transfer with Reassessment"}>
                                Transfer with Reassessment
                            </option>
                            <option key={"Transfer with Correction"} value={"Transfer with Correction"}>
                                Transfer with Correction
                            </option>
                            <option key={"Change Classification"} value={"Change Classification"}>
                                Change Classification
                            </option>
                            <option key={"Change Taxability"} value={"Change Taxability"}>
                                Change Taxability
                            </option>
                        </TextField>
                        : null
                    }
                    {user.user.role === "ASSESSOR" ?
                        null :
                        <Button
                            variant="contained"
                            style={{ color: "white", fontWeight: "bold" }}
                            // onClick={() => {
                            //     setShowInitialModal(true);
                            //     setData(null);
                            // }}
                            onClick={onAddFaas}
                        >
                            <AddBox /> FAAS
                        </Button>
                    }
                </div>
            </div>

            <div>
                <FaasTable
                    faasList={filteredFaas}
                    setData={setData}
                    open={open}
                    setOpen={setOpen}
                    selected={selected}
                    setSelected={setSelected}
                    setSelectedToDelete={setSelectedToDelete}
                    setShowDataCaptureModal={setShowDataCaptureModal}
                    deleteData={deleteData}
                />
            </div>

            {/* Initial info modal */}
            <Modal
                isOpen={showInitialModal}
                onRequestClose={() => { setShowInitialModal(false) }}
                contentLabel="Example Modal"
                onClose={() => setShowInitialModal(false)}
                ariaHideApp={false}
                style={{
                    content: {
                        top: "55%",
                        marginLeft: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "30%",
                        height: "65%",
                    },
                    overlay: {
                        zIndex: 10,
                    },
                }}
            >
                <InitialInfo
                    setShowInitialModal={setShowInitialModal}
                    revisionYearList={revisionYearList}
                    municipalityList={municipalityList}
                    barangayList={barangayList}
                    setShowDataCaptureModal={setShowDataCaptureModal}
                />
            </Modal>

            {/* DATA CAPTURE */}
            <Modal
                isOpen={showDataCaptureModal}
                onRequestClose={() => {
                    Swal.fire({
                        title: 'Discard changes?',
                        showCancelButton: true,
                        confirmButtonText: 'Yes',
                        denyButtonText: `Cancel`,
                    }).then(async (result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            await dispatch(removeAssessmentDetail([]))
                            await dispatch(removeSelectedAdjustment([]))
                            setShowDataCaptureModal(false);
                        } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }
                    })
                }}
                contentLabel="Example Modal"
                // onClose={() => setShowDataCaptureModal(false)}
                ariaHideApp={false}
                style={{
                    content: {
                        top: "50%",
                        marginLeft: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "70%",
                        height: "90%",
                    },
                    overlay: {
                        zIndex: 999,
                    },
                }}
            >
                <DataCapturePage
                    data={data}
                    transaction={transaction}
                    status={status}
                    setShowDataCaptureModal={setShowDataCaptureModal}
                    personnel={personnel}
                />

            </Modal>

            <Modal
                isOpen={showTdModal}
                onRequestClose={() => {
                    setShowTdModal(!showTdModal)
                }}
                contentLabel="Example Modal"
                onClose={() => {
                    setShowTdModal(!showTdModal)
                }}
                ariaHideApp={false}
                style={{
                    content: {
                        top: '50%',
                        marginLeft: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '25%',
                        maxWidth: '45%',
                        height: '45%'
                    },
                    overlay: {
                        zIndex: 9999
                    }
                }}
            >
                <InputTdComponent
                    setShowTdModal={setShowTdModal}
                    setShowDataCaptureModal={setShowDataCaptureModal}
                    transaction={transaction}
                    faasList={faasList}
                    setData={setData}
                />
            </Modal>

            <Modal
                isOpen={showPrintModal}
                onRequestClose={() => {
                    setShowPrintModal(!showPrintModal)
                }}
                contentLabel="Example Modal"
                onClose={() => {
                    setShowPrintModal(!showPrintModal)
                }}
                ariaHideApp={false}
                style={{
                    content: {
                        top: '50%',
                        marginLeft: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '45%',
                        maxWidth: '45%',
                        minWidth: '45%',
                        height: '95%'
                    },
                    overlay: {
                        zIndex: 9999
                    }
                }}
            >
                <ReactToPrintComponent />
            </Modal>
        </div>
    )
}

export default FaasPage;

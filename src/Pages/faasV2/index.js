import { Button } from '@mui/material';
import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

// components
import ReactToPrintComponent from '../../components/faasV2/react-to-print';
import FaasTable from '../../components/table/faas/faas-table';
import InitialInfo from '../../components/faas/data-capture/initial-info';
import DataCapturePage from '../faas/data-capture';

// redux
import { removeAssessmentDetail } from '../../redux/assessment-detail/actions';
import { removeSelectedAdjustment } from '../../redux/land-adjustments/actions';
import { fetchFaasRedux } from '../../redux/faas/actions';

const FaasPage = () => {
    const dispatch = useDispatch();
    // global states
    const faasList = useSelector((state) => state.faasData.faas);
    const revisionYearList = useSelector((state) => state.revisionYearData.revisionYears);
    const municipalityList = useSelector((state) => state.municipalityCityData.municipalityCity);
    const barangayList = useSelector((state) => state.barangayData.barangay);

    //local states
    const [showPrintModal, setShowPrintModal] = React.useState(false);
    const [showInitialModal, setShowInitialModal] = React.useState(false);
    const [showDataCaptureModal, setShowDataCaptureModal] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState([]);
    const [selectedToDelete, setSelectedToDelete] = React.useState(false);
    const [transaction, setTransaction] = React.useState("DC");
    const [status, setStatus] = React.useState("INTERIM");

    React.useEffect(() => {
        dispatch(fetchFaasRedux())
    }, [dispatch])

    return (
        <div>
            <h1>Faas V2</h1>
            <Button onClick={() => { setShowPrintModal(!showPrintModal) }}>
                <h6>Print</h6>
            </Button>

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
                        setShowInitialModal(true);
                        setData(null);
                    }}
                >
                    Data Capture
                </Button>
            </div>

            <div>
                <FaasTable
                    faasList={faasList}
                    setData={setData}
                    open={open}
                    setOpen={setOpen}
                    selected={selected}
                    setSelected={setSelected}
                    setSelectedToDelete={setSelectedToDelete}
                    setShowDataCaptureModal={setShowDataCaptureModal}
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

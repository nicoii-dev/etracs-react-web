import React, {useState, useEffect, useCallback} from 'react';
import Modal  from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider} from "react-hook-form";
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// components
import InitialInfo from '../../components/faas/data-capture/initial-info';
import GeneralInformation from '../../components/faas/data-capture/general-information';
import OwnershipInformation from '../../components/faas/data-capture/ownership-information';
import RealPropertyInformation from '../../components/faas/data-capture/real-property-information';
import Remarks from '../../components/faas/data-capture/remarks';
import AssessmentDetail from '../../components/faas/data-capture/assessment-detail';

// redux
import { fetchRevisionYearRedux } from '../../redux/revision-year/action';

const DataCapturePage = () => {
    const dispatch = useDispatch();

    // global states
    const revisionYearList = useSelector(state => state.revisionYearData.revisionYears);
    const municipalityList = useSelector(state => state.municipalityCityData.municipalityCity);
    const barangayList = useSelector(state => state.barangayData.barangay);
    const pin = useSelector(state => state.pinData.pin)
    const status = useSelector(state => state.navStatus.status)

    // states
    const [showModal, setShowModal] = useState(true);
    const [showAssessmentModal, setShowAssessmentModal] = useState(false);

    const methods = useForm();
    const {handleSubmit, control, formState: { errors } } = methods;
    const addDataCapture = data => console.log(data)

    const fetchData = useCallback(async () => {
        await dispatch(fetchRevisionYearRedux())
    }, [dispatch])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <>
            <h2 style={{fontFamily:'-moz-initial'}}>Data Capture</h2>
            <div>
                <FormProvider {...methods}>
                    <GeneralInformation
                        errors={errors}
                        control={control}
                    />
                    <OwnershipInformation 
                        errors={errors}
                        control={control}
                    />
                    <RealPropertyInformation
                        pin={pin}
                        errors={errors}
                        control={control}
                        showAssessmentModal={showAssessmentModal}
                        setShowAssessmentModal={setShowAssessmentModal}
                    />

                    <Remarks
                        errors={errors}
                        control={control}
                    />
                    
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: 2,
                        }}
                    >
                        <Button color="primary" variant="contained" onClick={handleSubmit(addDataCapture)}>
                            Save details
                        </Button>
                       
                    </Box>

                </FormProvider>
            </div>

                        {/* Initial info modal */}
                <Modal
                    isOpen={showModal}
                    //onRequestClose={() => {setShowModal(!showModal)}}
                    contentLabel="Example Modal"
                    onClose={() => setShowModal(!showModal)}
                    ariaHideApp={false}
                    style={{
                        content: {
                        top: '55%',
                        marginLeft: !status ? '50%' : '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '30%',
                        height:'65%',
                        },
                        overlay: {
                            zIndex:10
                        }
                    }}
                >

                    <InitialInfo
                        showModal={showModal}
                        setShowModal={setShowModal}
                        revisionYearList={revisionYearList}
                        municipalityList={municipalityList}
                        barangayList={barangayList}
                    />

                </Modal>

                    {/* Assessment detail modal */}
                <Modal
                    isOpen={showAssessmentModal}
                    onRequestClose={() => {setShowAssessmentModal(!showAssessmentModal)}}
                    contentLabel="Example Modal"
                    onClose={() => setShowAssessmentModal(!showAssessmentModal)}
                    ariaHideApp={false}
                    style={{
                        content: {
                        top: '55%',
                        marginLeft: !status ? '50%' : '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '70%',
                        height:'80%',
                        },
                        overlay: {
                            zIndex:10
                        }
                    }}
                >

                    <AssessmentDetail
                   
                    />

                </Modal>

        </>

    );
};

export default DataCapturePage;

import React, {useState, useEffect, useCallback} from 'react';
import Modal  from 'react-modal';
import { useSelector } from 'react-redux';
import { useForm, FormProvider} from "react-hook-form";
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import DataCapture from '../../components/faas/data-capture';
import InitialInfo from '../../components/faas/data-capture/initial-info';
import GeneralInformation from '../../components/faas/data-capture/general-information';
import OwnershipInformation from '../../components/faas/data-capture/ownership-information';
import RealPropertyInformation from '../../components/faas/data-capture/real-property-information';
import Remarks from '../../components/faas/data-capture/remarks';

const DataCapturePage = () => {
    const municipalityList = useSelector(state => state.municipalityCityData.municipalityCity);
    const barangayList = useSelector(state => state.barangayData.barangay);
    const pin = useSelector(state => state.pinData.pin)
    const status = useSelector(state => state.navStatus.status)
    const [showModal, setShowModal] = useState(true);

    const methods = useForm();
    const {handleSubmit, control, formState: { errors } } = methods;
    const addDataCapture = data => console.log(data)

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
                        municipalityList={municipalityList}
                        barangayList={barangayList}
                    />

                </Modal>

        </>

    );
};

export default DataCapturePage;

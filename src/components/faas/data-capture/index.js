import React from 'react';
import { useForm, FormProvider} from "react-hook-form";
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
// components
import GeneralInformation from './general-information';
import OwnershipInformation from './ownership-information';
import RealPropertyInformation from './real-property-information';

const DataCapture = () => {

    const methods = useForm();
    const {handleSubmit, control, formState: { errors } } = methods;
    const addDataCapture = data => console.log(data)

    //const status = useSelector(state => state.navStatus.status)

    return (
        <>
            
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
        </>
    )
}

export default DataCapture;
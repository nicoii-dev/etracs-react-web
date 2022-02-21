import React, {useState} from 'react';
import { useForm, FormProvider} from "react-hook-form";
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
// components
import GeneralInformation from './general-information';

const DataCapture = () => {

    const methods = useForm();
    const {handleSubmit, control, formState: { errors } } = methods;
    const addIndividualForm = data => console.log(data)

    //const status = useSelector(state => state.navStatus.status)
    const [open, setOpen] = useState(false);

    return (
        <>
            
            <FormProvider {...methods}>

                    <GeneralInformation
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
                        <Button color="primary" variant="contained" onClick={handleSubmit(addIndividualForm)}>
                            Save details
                        </Button>
                       
                    </Box>
            </FormProvider>
        </>
    )
}

export default DataCapture;
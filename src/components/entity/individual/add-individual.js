import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,

} from '@mui/material';
import Fade from '@mui/material/Fade';

// components
import PersonalInformation from './personal-information'

// styles
import IndividualModalStyles from '../../../styles/modal/individual-modal';
import OtherInformation from './other-information';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const AddIndividual = ({open}) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    middleName: 'BB',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Fade in={open}>
      <Box sx={IndividualModalStyles.modal} style={{borderRadius:5}}>
          <Card>
          <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
              <PersonalInformation
                handleChange={handleChange}
                values={values}
                states={states}
              />
            </Grid>
            <Divider />
            <Grid item md={4} xs={12}>
            


              <OtherInformation 
                handleChange={handleChange}
                values={values}
                states={states}
              />
            </Grid>
          </Grid>


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 4,
              }}
            >
              <Button color="primary" variant="contained">
                Save details
              </Button>
            </Box>
          </Card>
        </Box>
    </Fade>
  );
};

export default AddIndividual;

import React, {useState, useEffect, useCallback} from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import {Box} from '@mui/material';
// components
import IndividualTable from '../../components/table/entity/individual-table';
import AddIndividual from '../../components/entity/individual/add-individual';
// api
import IndividualApi from '../../library/api/individual-api';

// styles
import IndividualModalStyles from '../../styles/modal/individual-modal';


const IndividualPage = () => {

    const [individual, setIndividual] = useState();
    const [payload, setPayload] = useState([]);

    const getData = useCallback(async() => {
      try {
          const _individual = await IndividualApi.getIndividuals();
          setIndividual(_individual)
      
      } catch (error) {
          console.log(error.message);
      }
  }, [setIndividual]);
  
  useEffect(() => {
      getData();
  }, [getData])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <div>
            <h1>Individual Page</h1>
            <div style={{width:'100%', display:'flex', justifyContent:'flex-end', marginBottom: 10}}>
                <Button variant="contained" style={{color:'white'}} onClick={handleOpen}>
                    Add Individual
                </Button>
            </div>

            <div>
                <IndividualTable 
                    individual={individual}
                    payload={payload}
                    setPayload={setPayload}
                />
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                overflow='scroll'
                // style={{overflow:'scroll',}}
                
            >
                <Fade in={open}>
                    <Box sx={IndividualModalStyles.modal} style={{borderRadius:5}} component="form">
                        <AddIndividual
                            payload={payload}
                            setPayload={setPayload}
                        />
                    </Box>
                </Fade>
               
            </Modal>
        </div>
    );  
};

export default IndividualPage;
import React, {useState, useEffect, useCallback} from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import {Box} from '@mui/material';
// components
import MultipleTable from '../../components/table/entity/multiple-table';
import AddMultiple from '../../components/entity/multiple/add-multiple';
import AddMultipleEntity from '../../components/entity/multiple/add-multiple-entity';
// api
import ProductApi from '../../library/api/products-api';

// styles
import IndividualModalStyles from '../../styles/modal/individual-modal';

const MultiplePage = () => {

    const [products, setProducts] = useState();
    const [payload, setPayload] = useState([]);

    const getData = useCallback(async() => {
      try {
          const _products = await ProductApi.getProduct();
          setProducts(_products)
      
      } catch (error) {
          console.log(error.message);
      }
  }, [setProducts]);
  
  useEffect(() => {
      getData();
  }, [getData])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <div>
            <h1>Juridical Page</h1>
            <div style={{width:'100%', display:'flex', justifyContent:'flex-end', marginBottom: 10}}>
                <Button variant="contained" style={{color:'white'}} onClick={handleOpen}>
                    Add Multiple
                </Button>
            </div>

            <div>
                <MultipleTable 
                    products={products}
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
            >
                <Fade in={open}>
                    <Box sx={IndividualModalStyles.modal} style={{borderRadius:5}} component="form">
                        {/* <AddMultipleEntity
                            payload={payload}
                            setPayload={setPayload}
                        /> */}
                        <AddMultiple 
                            payload={payload}
                            setPayload={setPayload}
                        />
                    </Box>
                </Fade>
               
            </Modal>
        </div>
    );  
};

export default MultiplePage;
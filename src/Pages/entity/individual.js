import React, {useState, useEffect, useCallback} from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
// components
import EnhancedTable from '../../components/table/entity';
import AddIndividual from '../../components/entity/individual/add-individual';
// api
import ProductApi from '../../library/api/products-api';

const IndividualPage = () => {

    const [products, setProducts] = useState();

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
            <h1>Individual Page</h1>
            <div style={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
                <Button variant="contained" style={{color:'white'}} onClick={handleOpen}>
                    Add Individual
                </Button>
            </div>

            <div>
                <EnhancedTable products={products}/>
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
                <AddIndividual open={open} />
            </Modal>
        </div>
    );  
};

export default IndividualPage;
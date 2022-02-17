import React, {useState, useEffect, useCallback} from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import {Box} from '@mui/material';

import IndividualModalStyles from '../../styles/modal/individual-modal';

import BarangayTable from '../../components/table/barangay';

const BarangayPage = () => {
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <h1>Barangay Page</h1>
            <div style={{width:'100%', display:'flex', justifyContent:'flex-end', marginBottom: 10}}>
                <Button variant="contained" style={{color:'white'}} onClick={handleOpen}>
                    Add Barangay
                </Button>
            </div>

            <div>
                <BarangayTable 
                  
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
                        
                    </Box>
                </Fade>
               
            </Modal>
        </div>
    );
}

export default BarangayPage;
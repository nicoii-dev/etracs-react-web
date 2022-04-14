import { Button } from '@mui/material';
import React from 'react';
import Modal from 'react-modal';

// components
import ReactToPrintComponent from '../../components/faasV2/react-to-print';
import FaasTable from '../../components/table/faas/faas-table';

const FaasPage = () => {
    
    const [showModal, setShowModal] = React.useState(false);

    // components

    return (
        <div>
            <h1>Faas V2</h1>
            <Button onClick={()=> {setShowModal(!showModal)}}>
                <h6>Print</h6>
            </Button>

            <div>
                <FaasTable />
            </div>

            <Modal
                isOpen={showModal}
                onRequestClose={() => {
                    setShowModal(!showModal)
                }}
                contentLabel="Example Modal"
                onClose={() => {
                    setShowModal(!showModal)
                }}
                ariaHideApp={false}
                style={{
                    content: {
                        top: '50%',
                        marginLeft: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '45%',
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

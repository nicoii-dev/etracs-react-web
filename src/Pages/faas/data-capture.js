import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import DataCapture from '../../components/faas/data-capture';
import { useForm, FormProvider} from "react-hook-form";
import {Box} from '@mui/material';

const DataCapturePage = () => {
    const methods = useForm();
    const { control, handleSubmit, watch, formState: { errors } } = methods;
    const addIndividualForm = data => console.log(data)

    const status = useSelector(state => state.navStatus.status)
    const [open, setOpen] = useState(false);

    // const addIndividualForm = async (_data) => {
    //   //setData(data);
    // //   addData(_data);
    // console.log(_data)
    // }

    return (
        <>
            <h2 style={{fontFamily:'-moz-initial'}}>Data Capture</h2>
            <div style={{width:'100%', display:'flex', justifyContent:'flex-end', marginBottom: 10}}>
                <Button 
                    variant="contained" 
                    style={{color:'white'}} 
                    onClick={() => {
                        setOpen(!open)
                    }}>
                    Add
                </Button>
            </div>
            <DataCapture />

            <Modal
            isOpen={open}
            onRequestClose={() => {setOpen(!open)}}
            contentLabel="Example Modal"
            onClose={() => setOpen(!open)}
            ariaHideApp={false}
            style={{
                content: {
                top: '55%',
                marginLeft: !status ? '50%' : '58%',
                transform: 'translate(-50%, -50%)',
                width: !status ? '80%' : '73%',
                height:'75%'
                },
            }}
            >
            </Modal>

        </>

    );
};

export default DataCapturePage;
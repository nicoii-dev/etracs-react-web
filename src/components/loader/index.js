import React from 'react';
import { useSelector } from 'react-redux';
import { css } from "@emotion/react";
import ClipLoadersaa from "react-spinners/ClipLoader";
import Modal from 'react-modal'
import { Spinner } from 'react-bootstrap';
import { CircularProgress } from '@mui/material';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const LoaderComponent = () => {
    const isLoading = false
    console.log(isLoading)
    if (!isLoading) return null;


    return (
        <>
            <Modal
                isOpen={isLoading}
                transparent={true}
                onRequestClose={() => {
                }}
                contentLabel="Example Modal"
                onClose={isLoading}
                ariaHideApp={false}
                style={{
                    content: {
                        top: "40%",
                        marginLeft: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "100%",
                        height: "120%",
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        zIndex:99999
                    },
                }}
            >
                <CircularProgress disableShrink size={100} sx={{position: 'absolute', left: '50%', top: '35%'}}/>
            </Modal>

        </>

    )
}

export default LoaderComponent;
import React from 'react';
import { useSelector } from 'react-redux';
import { css } from "@emotion/react";
import ClipLoadersaa from "react-spinners/ClipLoader";
import Modal from 'react-modal'
import { Spinner } from 'react-bootstrap';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const LoaderComponent = () => {
    const isLoading = useSelector(state => state.loaderData.isLoading);
    console.log(isLoading)
    if (!isLoading) return null;


    return (
        <>
            <Modal
                isOpen={isLoading}
                onRequestClose={() => {
                }}
                contentLabel="Example Modal"
                onClose={isLoading}
                ariaHideApp={false}
                style={{
                    content: {
                        top: "35%",
                        marginLeft: "53%",
                        transform: "translate(-50%, -50%)",
                        width: "48%",
                        height: "60%",
                    },
                }}
            >
                <ClipLoadersaa color={"#ffffff"} loading={true} css={override} size={150} />
            </Modal>

        </>

    )
}

export default LoaderComponent;
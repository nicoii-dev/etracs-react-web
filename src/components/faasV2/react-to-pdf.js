import React from 'react';
import { useReactToPrint } from 'react-to-print';
import DataToPdf from './data-to-pdf';
import { Button } from '@mui/material';
import { PictureAsPdf, Print } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const ReactToPdf = (props) => {

    const componentRef = React.useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <div style={{ position: 'absolute', right: 30, top: 30 }}>
                {/* <Button onClick={handlePrint} color="primary" variant="contained">PRINT</Button> */}
                <IconButton onClick={handlePrint}>
                    <Print />
                </IconButton>
            </div>
            <DataToPdf ref={componentRef} data={props.rpaFormData} />
        </div>
    )
};

export default ReactToPdf;

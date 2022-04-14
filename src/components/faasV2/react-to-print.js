import React from 'react';
import { useReactToPrint } from 'react-to-print';
import DataToPrint from './data-to-print';
import { Button } from '@mui/material';

const ReactToPrintComponent = () => {
    const componentRef = React.useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div>
            <div style={{position: 'absolute', right: 15, top: 15}}>
                <Button onClick={handlePrint} color="primary" variant="contained">PRINT</Button>
            </div>
            <DataToPrint ref={componentRef} />
        </div>
    )
};

export default ReactToPrintComponent;

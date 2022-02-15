import React, {useRef} from 'react';
import {Button} from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div 
                style={{
                    fontSize:150, 
                    textAlign:'center', 
                    justifyContent:'center', 
                    alignContent:'center', 
                    marginTop:'10%',
                }}
            >
                <p 
                    style={{
                        fontSize:150, 
                        fontFamily:'serif',
                        color:'#3399FF',
                        fontWeight:'bold'
                    }}>
                    4 0 4
                </p>

                <p style={{fontSize:30}}>
                    Page not found
                </p>
                <Button color="primary" onClick={() => navigate(-1)}>
                   <ArrowBack /> Go back
                </Button>
            </div>
        </div>
    )
};

export default Error404;
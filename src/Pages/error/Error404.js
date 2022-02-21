import React, {useRef} from 'react';
import {
    CardContent,
    Divider,
    Grid,
    TextField,
  } from '@mui/material';
import {Button} from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';


const Error404 = () => {
    const navigate = useNavigate();

    return (
        <>
            <Grid container 
                style={{
                    alignContent:'center', 
                    justifyContent:'center'
                }}>
                    <Divider textAlign="center">
                        <p 
                            style={{
                                fontSize:150, 
                                fontFamily:'serif',
                                color:'#3399FF',
                                fontWeight:'bold'
                            }}>
                            4 0 4
                        </p>
                        <p style={{fontSize:30, marginTop:-120}}>
                            Page not found
                        </p>
                        <Button color="primary" onClick={() => navigate(-1)}>
                            <ArrowBack /> Go back
                        </Button>
                    </Divider>
            </Grid>
        </>
    )
};

export default Error404;
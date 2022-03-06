import React from "react";
import { CardContent, Grid} from '@mui/material';

// components
import SpecificClass from "./specific-class";
import SubClass from './sub-class';

const ClassificationClasses = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <SpecificClass />
                        </Grid>
                        <Grid item md={6} xs={12} >
                            <Grid item md={12} xs={12} >
                                <SubClass />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ClassificationClasses;

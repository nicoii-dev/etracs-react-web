import React, { useState, useEffect, useCallback } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { TotalIndividual } from '../../components/dashboard/total-individual';
import { TotalJuridical } from '../../components/dashboard/total-juridical';
import { TotalMultiple } from '../../components/dashboard/total-multiple';
import { TotalPersonnel } from '../../components/dashboard/total-personnel';
import { TotalAppraised } from '../../components/dashboard/total-appraised';
import { TotalInterim } from '../../components/dashboard/total-interim';
import { TotalCurrent } from '../../components/dashboard/total-current';
import { TotalForApproval } from '../../components/dashboard/total-for-approval';
import { TotalApproved } from '../../components/dashboard/total-approved';
import { TotalCancelled } from '../../components/dashboard/total-cancelled';

// redux actions
import { fetchIndividualRedux } from '../../redux/individual/actions';
import { fetchJuridicalRedux } from '../../redux/juridical/actions';
import { fetchMultipleRedux } from '../../redux/multiple/actions';
import { fetchPersonnelRedux } from '../../redux/personnel/actions';
import { fetchFaasRedux } from '../../redux/faas/actions';

const DashboardV2 = () => {
    const dispatch = useDispatch();
    const individualList = useSelector((state) => state.individualData.individuals);
    const juridicalList = useSelector((state) => state.juridicalData.juridicals);
    const multipleList = useSelector((state) => state.multipleData.multiples);
    const personnelList = useSelector((state) => state.personnelData.personnels);
    const faasList = useSelector((state) => state.faasData.faas);

    const [interim, setInterim] = useState(0);
    const [current, setCurrent] = useState(0);
    const [forApproval, setForApproval] = useState(0);
    const [approved, setApproved] = useState(0);
    const [cancelled, setCancelled] = useState(0);

    const fetchData = useCallback(async () => {
        await dispatch(fetchPersonnelRedux());
        await dispatch(fetchIndividualRedux());
        await dispatch(fetchJuridicalRedux());
        await dispatch(fetchMultipleRedux());
        await dispatch(fetchFaasRedux());

    }, [dispatch])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const faasHandler = useCallback(() => {
        let _interim = 0;
        let _current = 0;
        let _forApproval = 0;
        let _approved = 0;
        let _cancelled = 0;
        faasList?.map(faas => {
            switch (faas.status) {
                case "INTERIM":
                    _interim = _interim + 1;
                    break;
                case "CURRENT":
                    _current = _current + 1;
                    break;
                case "FOR APPROVAL":
                    _forApproval = _forApproval + 1;
                    break;
                case "APPROVED":
                    _approved = _approved + 1;
                    break;
                case "CANCELLED":
                    _cancelled = _cancelled + 1;
                    break;
                default:
                    break;
            }
        })
        setInterim(_interim);
        setCurrent(_current);
        setForApproval(_forApproval);
        setApproved(_approved);
        setCancelled(_cancelled);
    }, [faasList])
    console.log(faasList)
    console.log(interim)

    useEffect(() => {
        faasHandler();
    }, [faasHandler])

    return (
        <Card>
            <CardHeader
                subheader="The information can be edited"
                title="Personal Infomation"
            />
            <Divider />
            <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item md={3} xs={12}>
                        <TotalIndividual individuallist={individualList} />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <TotalJuridical juridicallist={juridicalList} />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <TotalMultiple multiplelist={multipleList} />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <TotalPersonnel personnellist={personnelList} />
                    </Grid>

                    <Grid item md={2.4} xs={12}>
                        <TotalInterim interim={interim} />
                    </Grid>
                    <Grid item md={2.4} xs={12}>
                        <TotalCurrent current={current} />
                    </Grid>
                    <Grid item md={2.4} xs={12}>
                        <TotalForApproval forapproval={forApproval} />
                    </Grid>
                    <Grid item md={2.4} xs={12}>
                        <TotalApproved approved={approved} />
                    </Grid>
                    <Grid item md={2.4} xs={12}>
                        <TotalCancelled cancelled={cancelled} />
                    </Grid>
                    {/* <Grid item md={2} xs={12}>
                        <TotalAppraised totalappraised={faasList.length} />
                    </Grid> */}
                </Grid>
            </CardContent>
            <Divider />
            {/* <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                }}
            >
                <Button
                    color="primary"
                    variant="contained"
                >
                    Save details
                </Button>
            </Box> */}
        </Card>
    );
};

export default DashboardV2;

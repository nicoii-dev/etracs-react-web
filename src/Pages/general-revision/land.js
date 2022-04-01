import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from 'react-modal';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

// components
import TabComponent from '../../components/tabs';
import AssessmentLevels from '../../components/general-revision/land/assessment-levels';
import LCUV from '../../components/general-revision/land/lcuv';
import LandAdjustment from '../../components/general-revision/land/land-adjustment';
import AppliedToTheFollowingLgus from '../../components/general-revision/land/applied-to-the-following-lgus';
import RevisionYear from '../../components/general-revision/revision-year';

// redux
import { setRevisionYearRedux } from '../../redux/revision-year/action';
import { setAssessmentLevelID } from '../../redux/assessment-levels/actions';
import { setMarketValue } from '../../redux/market-value/action';
import { setSpecificClass } from '../../redux/specific-class/action';
import { setClassificationData } from '../../redux/classification/actions';
import { setSubClass } from '../../redux/sub-class/action';
import { setStripping } from '../../redux/stripping/action';

const LandRevision = () => {
    const dispatch = useDispatch();
    const revisionYear = useSelector(state => state.revisionYearData.currentRevision)
    const [showModal, setShowModal] = useState(true);
    const [selectedYear, setSelectedYear] = useState();

    const tabData = [
        {
            'id' : '1',
            'title' : 'Assessment Levels',
            'tab' : <AssessmentLevels revisionYear={revisionYear}/>
        },
        {
            'id' : '2',
            'title' : 'LCUV',
            'tab' : <LCUV revisionYear={revisionYear}/>
        },
        {
            'id' : '3',
            'title' : 'Land Adjustment',
            'tab' : <LandAdjustment revisionYear={revisionYear}/>
        },
        {
            'id' : '4',
            'title' : 'Applied to the following LGUs',
            'tab' : <AppliedToTheFollowingLgus revisionYear={revisionYear}/>
        },
    ]

    useEffect(() => {
        if(revisionYear === undefined || revisionYear === null) {
            setShowModal(true);
        } else {
            setShowModal(false)
        }
    }, [revisionYear])

    // on reset data if revision year changed
    const onHandleChange = async() => {
        setShowModal(!showModal);
        await dispatch(setAssessmentLevelID(null))
        await dispatch(setMarketValue([]))
        await dispatch(setSpecificClass())
        await dispatch(setClassificationData([]));
        await dispatch(setSubClass())
        await dispatch(setStripping())
    }

    return (
        <>
            <div>
                <h1>
                    Land
                </h1>
                <h3 style={{flexDirection: 'row'}}>
                    Revision Year : {revisionYear} 
                    <Button color="primary" onClick={onHandleChange}> change</Button>
                </h3>

                
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TabComponent
                                tabData={tabData}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </div>

            <Modal
                isOpen={showModal}
                //onRequestClose={() => {setShowModal(!showModal)}}
                contentLabel="Example Modal"
                onClose={() => setShowModal(!showModal)}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: window.innerHeight > 900 ? '30%' : '30%',
                    height: window.innerHeight > 900 ? '51%' : '60%',
                    overflow: 'hidden'
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <RevisionYear
                    setSelectedYear={setSelectedYear}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2,
                        marginBottom: -2,
                        marginRight: -2
                    }}
                >
                    <Button 
                        color="primary" 
                        variant="contained" 
                        onClick={async() => {
                            if(selectedYear === undefined || selectedYear === null){
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Please select a year!',
                              }) 
                            } else {
                                await dispatch(setRevisionYearRedux(selectedYear.revision_year))
                                setShowModal(!showModal)
                            }
                        }}
                    >
                        Open
                    </Button>
                    
                </Box>
            </Modal>

        </>
    )
};

export default LandRevision;
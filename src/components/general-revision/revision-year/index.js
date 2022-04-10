import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Modal  from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { 
    fetchRevisionYearRedux,
    storeRevisionYearRedux,
    updateRevisionYearRedux,
    deleteRevisionYearRedux,
    setRevisionYearRedux,
} from '../../../redux/revision-year/action';
// components
import RevisionYearTable from './revision-year-table';
import AddEditRevisionYear from './add-edit-revision-year';

const RevisionYear = (props) => {
    const {setSelectedYear} = props;
    const dispatch = useDispatch();
    const revisionYearList = useSelector(state => state.revisionYearData.revisionYears);

    const [data, setData] = useState([]); // for update purposes
    const [selected, setSelected] = useState(); //for changing the color of table row
    const [showModal, setShowModal] = useState(false);
    const [yearList, setYearList] = useState([]);

    const generateArrayOfYears = () => {
        let max = new Date().getFullYear()
        let min = max - 22
        let years = []
      
        for (let i = max; i >= min; i--) {
          years.push({"year": i})
        }
        return years
      }

    useEffect(() => {
        setYearList(generateArrayOfYears())
        dispatch(fetchRevisionYearRedux());
    }, [dispatch])

    const addYear = async (_data) => {
        const payload = {
            revision_year: _data.revisionYear,
        }
        console.log(payload)
        await dispatch(storeRevisionYearRedux(payload));
        setShowModal(!showModal)
    }

    const deleteYear = async (id) => {
       await dispatch(deleteRevisionYearRedux(id))
    }

    return(
        <>
            <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            <RevisionYearTable 
                                showModal={showModal}
                                setShowModal={setShowModal}
                                dispatch={dispatch}
                                setData={setData}
                                selected={selected}
                                setSelected={setSelected}
                                deleteYear={deleteYear}
                                revisionYearList={revisionYearList}
                                setSelectedYear={setSelectedYear}
                                revisionRoute = {1} // for identifying the route
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Modal
                isOpen={showModal}
                onRequestClose={() => {
                    setShowModal(!showModal)
                }}
                contentLabel="Example Modal"
                onClose={() => {
                    setShowModal(!showModal)
                }}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '45%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '55%',
                    height: '35%'
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddEditRevisionYear 
                    addYear={addYear}
                    yearList={yearList}
                    revisionYearList={revisionYearList}
                />
            </Modal>
        </>
    )
}

export default RevisionYear;
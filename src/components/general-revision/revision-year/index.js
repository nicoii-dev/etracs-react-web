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

    // for table pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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

    // const updateRevision = async (_data) => {
    //     const payload = {
    //         code: _data.code.toUpperCase(),
    //         classification : _data.classification.toUpperCase()
    //     }
    //     await dispatch(updateRevisionYearRedux(payload, data.id));
    // }

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
                    top: '55%',
                    marginLeft: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '25%',
                    height: window.innerHeight > 900 ? '30%' : '40%',
                    },
                    overlay: {
                        zIndex:10
                    }
                }}
            >
                <AddEditRevisionYear 
                    data={data}
                    addYear={addYear}
                    yearList={yearList}
                    revisionYearList={revisionYearList}
                />
            </Modal>
        </>
    )
}

export default RevisionYear;
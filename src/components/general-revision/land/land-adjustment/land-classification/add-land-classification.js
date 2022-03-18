import React, {useState, useEffect} from 'react';
import {
    CardContent,
    Divider,
    Grid,
    Box,
    Button,
    TextField
  } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import ClassificationListTable from './classification-list-table';
import {fetchClassificationRedux} from '../../../../../redux/classification/actions'

const AddLandClassification = (props) => {
    const {addClassificationRedux} = props;
    const dispatch = useDispatch();
    const {handleSubmit, control, formState: { errors } } = useForm();

    const classificationList = useSelector(state => state.classificationData.classification);
    const addedClassificationList = useSelector(state => state.landAdjustmentData.addedClassification);

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        dispatch(fetchClassificationRedux());
    }, [dispatch])

    const handleAddClassification = async () => {
        await dispatch(addClassificationRedux(selected))
    }

    return (
        <>      
            <Divider textAlign="center">
                <p style={{fontSize:20}}>
                    Classification
                </p>
            </Divider>

            <div 
                style={{
                    display:'flex', 
                    height: window.innerHeight > 900 ? '75%' : '70%'
                }}
            >
                <ClassificationListTable 
                    classificationList={classificationList}
                    addedClassificationList={addedClassificationList}
                    selected={selected}
                    setSelected={setSelected}
                />

            </div>

            <Button
                style={{
                    position:'absolute',
                    bottom:15,
                    right:15
                }}
                color="primary" 
                variant="contained" 
                onClick={handleAddClassification}
            >
                add
            </Button>

        </>
    )
}

export default AddLandClassification;

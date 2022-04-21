import React, { useState, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CardHeader, Divider, CardContent, Button } from '@mui/material';
import Select from 'react-select';
import { useDispatch } from 'react-redux';

// redux
import {setAssessmentDetail} from '../../redux/assessment-detail/actions';
import { setRevisionFaas } from '../../redux/revision-year/action';
import { setPin } from '../../redux/pin/action';

import InputErrorStyles from '../../styles/error-text/InputErrorStyles.module.css';
// styles for react select
const selectStyles = {
    control: provided => ({ ...provided, minWidth: 240, }),
    menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)', opacity: 1, }),
    menu: base => ({
        ...base,
        zIndex: 100
    })
};

const InputTdComponent = (props) => {
    const { setShowTdModal, setShowDataCaptureModal, tdNumber, transaction, faasList, setData } = props;
    const { control, handleSubmit, watch, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    // local state
    const [newTdList, setNewTdList] = useState([]);
    const [tdSelected, setTdSelected] = useState("");

    console.log(faasList)
    const createTdList = useCallback(() => {
        // creating new array for owner search component selection data
        let newData = [];
        faasList.forEach(item => newData.push({
            "id": item.id,
            "value": item.td_number,
            "label": item.td_number,
        }));
        setNewTdList(newData);
    }, [faasList])

    useEffect(() => {
        createTdList();
    }, [createTdList]);

    const onTdSelected = (data) => {
        setTdSelected(data)
        console.log(data)
    }

    const nextButtonHandler = async () => {
        // filtering, getting data based on revision year
        const filteredFaas = faasList.filter((faas) => {
            return faas.td_number === tdSelected
        })
        setData(filteredFaas[0]);
        setShowTdModal(false);
        setShowDataCaptureModal(true)
        const payload = {
            classification: filteredFaas[0].classification_id,
            classification_name: filteredFaas[0].classification_name,
            rate: filteredFaas[0].assessment_level,
            specific_class: filteredFaas[0].specific_class,
            area_type: filteredFaas[0].area_type,
            sub_class: filteredFaas[0].sub_class,
            unit_value: filteredFaas[0].unit_value,
            land_area: filteredFaas[0].area,
            market_value: filteredFaas[0].market_value,
            total_land_area_sqm: filteredFaas[0].area_type === "SQM" ? parseFloat(filteredFaas[0].area) * 1 : parseFloat(filteredFaas[0].area) * 10000,
            total_land_area_ha: filteredFaas[0].area_type === "SQM" ? parseFloat(filteredFaas[0].area) / 10000 : parseFloat(filteredFaas[0].area) * 1,
            land_base_market_value: filteredFaas[0].market_value,
            land_market_value: filteredFaas[0].market_value,
            land_assessed_value: filteredFaas[0].assessed_value,
            taxable: filteredFaas[0].taxable,
        }
        await dispatch(setAssessmentDetail(payload));
        await dispatch(setRevisionFaas(filteredFaas[0].revision_year));
        await dispatch(setPin({ pin: filteredFaas[0].pin }))
    }

    return (
        <>
            <CardHeader
                title={transaction}
                subheader="Input TD Number of the data you want to tranfer."
            />
            <Divider />
            <CardContent>
                <Controller
                    defaultValue=""
                    name={'owner'}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Owner is required',
                        },
                        pattern: {
                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                            message: 'Owner is required',
                        }
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Select
                            name="owner"
                            options={newTdList}
                            styles={selectStyles}
                            value={value}
                            onChange={(e) => {
                                onChange(e)
                                onTdSelected(e.value)
                            }}
                            onBlur={onBlur}
                        />
                    )}
                />
                {errors.owner && (<div><p className={InputErrorStyles.errorText}>{errors.owner?.message}</p></div>)}
                <Button
                    variant="contained"
                    style={{ color: "white", fontWeight: "bold", position: 'absolute', bottom: 25, right: 25 }}
                    disabled={tdSelected === "" ? true : false}
                    onClick={nextButtonHandler}
                >
                    Next
                </Button>
            </CardContent>

        </>
    )
}

export default InputTdComponent;
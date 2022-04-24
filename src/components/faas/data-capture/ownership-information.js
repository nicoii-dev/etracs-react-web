import React, { useEffect, useCallback } from 'react';
import {
    CardContent,
    Divider,
    Grid,
    TextField
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select'
import { useSelector } from 'react-redux';

// component
import OwnerSearchComponent from './owner-search-component';

import InputErrorStyles from '../../../styles/error-text/InputErrorStyles.module.css';

// styles for react select
const selectStyles = {
    control: provided => ({ ...provided, minWidth: 240, }),
    menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)', opacity: 1, }),
    menu: base => ({
        ...base,
        zIndex: 100
    })
};

const OwnershipInformation = ({
    errors,
    control,
    data,
    entityList,
    ownerData,
    setOwnerData
}) => {
    const methods = useFormContext();

    const [selectedOption, setSelectedOption] = React.useState(data?.owner_name ? data?.owner_name : ""); // for updates
    const transaction = useSelector(state => state.transactionData.transaction)

    const setData = useCallback(() => {
        methods.setValue("address", ownerData.address)
        methods.setValue("declaredOwner", ownerData.label) // settings the value of fields using method
        methods.setValue("declaredOwnerAddress", ownerData.address)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ownerData.address, ownerData.label]);

    useEffect(() => {
        setData();
    }, [setData])

    return (
        <Grid container spacing={3} style={{ marginTop: -50 }}>
            <Grid item md={12} xs={12}>
                <Divider textAlign="left">
                    <p style={{ fontSize: 20 }}>
                        Ownership Information
                    </p>
                </Divider>
            </Grid>
            <Grid item md={6} xs={12} style={{ marginTop: -50 }}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            {/* <OwnerSearchComponent entityList={entityList} setOwnerData={setOwnerData} /> */}
                            <Controller
                                defaultValue={transaction === "Transfer of Ownership" ? "" : data?.owner_name}
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
                                        options={entityList}
                                        styles={selectStyles}
                                        value={ 
                                            transaction === "Transfer of Ownership" ? value :
                                            entityList.filter((option) => {
                                              return option.value === selectedOption
                                            })
                                           // value
                                        }

                                        // onChange={(e) => {
                                        //     console.log(e)
                                        // }}
                                        onChange={(e) => {
                                            onChange(e)
                                            setSelectedOption(e.value)
                                            setOwnerData(e)
                                        }}
                                        onBlur={onBlur}
                                        isDisabled={transaction === "Transfer of Ownership" || transaction === "Data Capture" ? false:true}
                                    />
                                )}
                            />
                            {errors.owner && (<div><p className={InputErrorStyles.errorText}>{errors.owner?.message}</p></div>)}
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <Controller
                                defaultValue={transaction === "Transfer of Ownership" ? "" : data?.declared_owner}
                                name={'declaredOwner'}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        //message: 'Appraised date is required',
                                    },
                                    pattern: {
                                        value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                        // message: 'Civil status is required',
                                    }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextField
                                        fullWidth
                                        label="Declared owner*"
                                        name="declaredOwner"
                                        variant="outlined"
                                        onBlur={onBlur}
                                        onChange={(e) => {
                                            onChange(e.target.value)
                                        }}
                                        size='small'
                                        value={value}
                                        error={errors.declaredOwner ? true : false}
                                        disabled={transaction === "Transfer of Ownership" || transaction === "Data Capture" ? false:true}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
            <Grid item md={6} xs={12} style={{ marginTop: -50 }}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            <Controller
                                defaultValue={transaction === "Transfer of Ownership" ? "" : data?.owner_address}
                                name={'address'}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        //message: 'Appraised date is required',
                                    },
                                    pattern: {
                                        value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                        // message: 'Civil status is required',
                                    }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextField
                                        fullWidth
                                        label="Address*"
                                        name="address"
                                        variant="outlined"
                                        onBlur={onBlur}
                                        disabled
                                        onChange={(e) => {
                                            onChange(e.target.value)
                                        }}
                                        size='small'
                                        value={value}
                                        error={errors.address ? true : false}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                            <Controller
                                defaultValue={transaction === "Transfer of Ownership" ? "" : data?.declared_address}
                                name={'declaredOwnerAddress'}
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        //message: 'Appraised date is required',
                                    },
                                    pattern: {
                                        value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                        // message: 'Civil status is required',
                                    }
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextField
                                        fullWidth
                                        label="Declared owner address*"
                                        name="declaredOwnerAddress"
                                        variant="outlined"
                                        onBlur={onBlur}
                                        onChange={(e) => {
                                            onChange(e.target.value)
                                        }}
                                        size='small'
                                        value={value}
                                        error={errors.declaredOwnerAddress ? true : false}
                                        disabled={transaction === "Transfer of Ownership" || transaction === "Data Capture" ? false:true}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
        </Grid>
    );
}

export default OwnershipInformation;